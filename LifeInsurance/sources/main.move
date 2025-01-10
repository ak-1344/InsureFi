module myAddr::LifeInsurance {
    use std::string::{Self, String};
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_token::token::{Self, TokenId};
    use aptos_std::table::{Self, Table};
    use std::signer;

    // Constants for premium and insurance amounts
    const MINIMUM_PREMIUM: u64 = 10000; // 0.01 APT
    const INSURANCE_AMOUNT: u64 = 100000; // 0.1 APT

    // Error codes
    const INSUFFICIENT_PREMIUM: u64 = 1;
    const NOT_POLICY_HOLDER: u64 = 2;
    const ALREADY_CLAIMED: u64 = 3;
    const NOT_NOMINEE: u64 = 4;

    // Struct to represent an insurance policy
    struct InsurancePolicy has store {
        policy_id: String,
        policy_holder_name: String,
        aadhar_id: String,
        insured_amount: u64,
        nominee_name: String,
        date_of_birth: String,
        premiums_paid: u64,
        is_claimed: bool,
    }

    // Struct to store a table of policies linked to NFTs
    struct PoliciesTable has key {
        table: Table<TokenId, InsurancePolicy>,
    }

    // Resource to hold insurance funds
    struct InsuranceFunds has key {
        funds: coin::Coin<AptosCoin>
    }

    // Initialize the contract - called once by the contract owner
    public entry fun initialize(contract_account: &signer) {
        move_to(contract_account, PoliciesTable {
            table: table::new()
        });
        move_to(contract_account, InsuranceFunds {
            funds: coin::zero<AptosCoin>()
        });
    }

    // Function to pay premium and mint NFT
    public entry fun pay_premium_and_mint_nft(
        account: &signer,
        policy_id: String,
        policy_holder_name: String,
        aadhar_id: String,
        nominee_name: String,
        date_of_birth: String,
        amount: u64,
        contract_address: address
    ) acquires PoliciesTable, InsuranceFunds {
        // Verify premium amount
        assert!(amount >= MINIMUM_PREMIUM, INSUFFICIENT_PREMIUM);

        // Transfer premium to contract
        let premium_payment = coin::withdraw<AptosCoin>(account, amount);
        let funds = &mut borrow_global_mut<InsuranceFunds>(contract_address).funds;
        coin::merge(funds, premium_payment);

        // Create NFT collection name and token name using policy details
        let collection_name = string::utf8(b"Life Insurance Policies");
        let token_name = policy_id;

        // Create NFT with policy details
        let token_data_id = token::create_tokendata(
            account,
            collection_name,
            token_name,
            string::utf8(b"Life Insurance Policy NFT"),
            1,
            string::utf8(b"https://life-insurance-nft.com/"), // placeholder URI
            signer::address_of(account),
            1,
            0,
            token::create_token_mutability_config(&vector[false, false, false, false, false]),
            // Store policy details in token properties
            vector[
                string::utf8(b"policy_holder_name"),
                string::utf8(b"aadhar_id"),
                string::utf8(b"nominee_name"),
                string::utf8(b"date_of_birth")
            ],
            vector[
                *string::bytes(&policy_holder_name),
                *string::bytes(&aadhar_id),
                *string::bytes(&nominee_name),
                *string::bytes(&date_of_birth)
            ],
            vector[
                string::utf8(b"string"),
                string::utf8(b"string"),
                string::utf8(b"string"),
                string::utf8(b"string")
            ]
        );

        // Mint the NFT
        let token_id = token::mint_token(
            account,
            token_data_id,
            1
        );

        // Add policy to table
        let table = &mut borrow_global_mut<PoliciesTable>(contract_address).table;
        table::add(table, token_id, InsurancePolicy {
            policy_id,
            policy_holder_name,
            aadhar_id,
            insured_amount: INSURANCE_AMOUNT,
            nominee_name,
            date_of_birth,
            premiums_paid: amount,
            is_claimed: false,
        });
    }

    // Function to redeem policy and receive insurance amount
    public entry fun redeem_policy(
        account: &signer,
        creator: address,
        collection_name: String,
        policy_id: String,
        property_version: u64,
        contract_address: address,
        nominee_name: String
    ) acquires PoliciesTable, InsuranceFunds {
        let table = &mut borrow_global_mut<PoliciesTable>(contract_address).table;
        
        // Reconstruct TokenId
        let token_id = token::create_token_id_raw(
            creator,
            collection_name,
            policy_id,
            property_version
        );
        
        let policy = table::borrow_mut(table, token_id);

        // Verify claimer is nominee
        assert!(policy.nominee_name == nominee_name, NOT_NOMINEE);
        assert!(!policy.is_claimed, ALREADY_CLAIMED);

        // Transfer insured amount from contract to nominee
        let funds = &mut borrow_global_mut<InsuranceFunds>(contract_address).funds;
        let payment = coin::extract(funds, policy.insured_amount);
        coin::deposit(signer::address_of(account), payment);

        // Mark policy as claimed
        policy.is_claimed = true;
        
        // Burn the NFT
        token::burn(
            account,
            creator,
            collection_name,
            policy_id,
            property_version,
            1
        );
    }

    // View function to get policy details
    #[view]
    public fun get_policy_details(
        contract_address: address,
        creator: address,
        collection_name: String,
        policy_id: String,
        property_version: u64
    ): (String, String, String, u64, String, String, u64, bool) acquires PoliciesTable {
        let table = &borrow_global<PoliciesTable>(contract_address).table;
        let token_id = token::create_token_id_raw(
            creator,
            collection_name,
            policy_id,
            property_version
        );
        let policy = table::borrow(table, token_id);
        
        (
            policy.policy_id,
            policy.policy_holder_name,
            policy.aadhar_id,
            policy.insured_amount,
            policy.nominee_name,
            policy.date_of_birth,
            policy.premiums_paid,
            policy.is_claimed
        )
    }
}
