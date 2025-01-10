import { Account, Aptos, AptosConfig, Ed25519PrivateKey, Network , PrivateKey } from "@aptos-labs/ts-sdk";
import { privateEncrypt } from "node:crypto";

const config = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(config);
const  priv_key = "0x54148d315db2b64e6fd8ec2343eac5480296aa19d4af65e04363dc9ec41c1e9c"
const getSigner=async()=>{
    const key = new Ed25519PrivateKey(priv_key);
    const signer = await aptos.deriveAccountFromPrivateKey({privateKey: key});
    return signer;
}

const ACCOUNT = "33ef0411f87b1bf0f5674befc10a0e27b606c97e397249ab21e0d212d860c438";
const MODULE = "trial"

const test=async()=>{
    const signer = await getSigner();
    const tnx = aptos.transaction.build.simple({
        signer: signer.accountAddress,
        data: {
            function: `${ACCOUNT}::${MODULE}::Test`,
            typeArguments:[],
            functionArguments:[]
        }
    })
    const comittnx = await aptos.signAndSubmitTransaction({
        signer: signer,
        transaction
    })
    await aptos.waitForTransaction({transactionHash:comittnx.hash})
}