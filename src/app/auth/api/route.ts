import User from "@/model/User";
import { connect } from "mongoose";



async function dbConnect() {
    const uri = "mongodb://defy25:@Defy25/?ssl=true&replicaSet=atlas-5nyw06-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    try{
        await connect(uri)
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.log('Database connection failed');
        })
    }
    catch(err){
        console.log(err);
    }
}

dbConnect();

export const FindUser = async (email: string, password: string) => {
    try{
        const doc = await User.findOne({email: email, password: password});
        return doc;
    }
    catch(err){
        console.log(err);
    }
}

export const saveUser = async (email: string, password: string , lastName: string , middleName: string , phoneNumber: string , firstName: string) => {
    try{
        const user = new User({
            email: email,
            password: password,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
        });
        await user.save();
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

export const verifyUser = async (email: string) => {
    try{
        const doc = await User.findOne({email: email})
        .catch((err) => {
            console.log(err);
        });
        if(doc){
            return true;
        }
    }
    catch(err){
        console.log(err);
    }
}
