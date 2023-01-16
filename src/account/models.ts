import { Schema, Model, model } from "mongoose";

interface IUser {
    name: string;
    email: string;
    passwordHash: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: 1,
        maxlength: 64,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    passwordHash: String,
});

export const User: Model<IUser> = model("User", userSchema);
