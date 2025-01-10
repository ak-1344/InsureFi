import { Schema , model } from 'mongoose';

interface IUser {
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
}

const UserSchema = new Schema<IUser>({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String
    },
    middleName:{
        type: String
    },
    lastName:{
        type: String
    },
    phoneNumber:{
        type: String
    }
})

const UserMain = model<IUser>('UserMain', UserSchema);

export default UserMain;
