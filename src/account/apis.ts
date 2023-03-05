import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "./models";

export async function register(
    request: Request,
    response: Response
): Promise<Response> {
    const { name, email, password } = request.body;

    let res: any = { success: false };

    let u = new User({ name, email });

    if (password) u.passwordHash = bcrypt.hashSync(password, 8);

    try {
        u = await u.save();
    } catch (error) {
        res.error = error;
        return response.status(404).json(res);
    }

    res.success = true;
    res.userId = u._id;
    return response.json(res);
}

export function me(request: Request, response: Response): Response {
    return response;
}

export function update(request: Request, response: Response): Response {
    return response;
}

export function deleteUser(request: Request, response: Response): Response {
    return response;
}

export async function signIn(
    request: Request,
    response: Response
): Promise<Response> {
    const { email, password } = request.body;

    let res: any = { success: false };

    let u = await User.findOne({ email }).exec();

    if (u && u.passwordHash) {
        if (bcrypt.compareSync(password, u.passwordHash)) {
            // authenticate
            res.success = true;
        } else res.error = "Wrong Password";
    } else res.error = "User Not Found";

    return response.json(res);
}

export function signOut(request: Request, response: Response): Response {
    return response;
}

export async function ping(
    request: Request,
    response: Response
): Promise<Response> {
    console.log(request.body, request.query);

    // const ETag = "randomId-1";
    // if (request.headers["if-none-match"] === ETag) {
    //     return response.status(304).json("");
    // }

    // response.set("Last-Modified", "Sat, 11 Feb 2023 09:10:00 GMT");
    response.set("Cache-Control", "max-age=5");
    // response.set("ETag", ETag);
    await wait(1000);
    return response.json({
        data: new Array(10000).fill("helloworld").join(""),
        message: request.query.message,
    });
}

const wait = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export * as default from "./apis";
