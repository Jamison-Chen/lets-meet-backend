import { Schema, Model, model } from "mongoose";

interface IUser {
    name: string;
    email: string;
    avatarUrl?: string;
    passwordHash?: string;
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
    avatarUrl: {
        type: String,
        match: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    },
    passwordHash: String,
});

export const User: Model<IUser> = model("User", userSchema);
