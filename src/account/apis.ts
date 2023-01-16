import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "./models";

export async function register(
    request: Request,
    response: Response
): Promise<Response> {
    const { name, email, password } = request.body;

    let res: any = { success: false };

    let a = new User({ name, email });

    if (password) {
        a.passwordHash = bcrypt.hashSync(password, 8);
    }

    try {
        a = await a.save();
    } catch (error) {
        return response.status(404).json(res);
    }
    res.success = true;
    res.user_id = a._id;
    return response.json(res);
}

export function ping(request: Request, response: Response): Response {
    return response.json({
        data: "pong",
        message: request.query.message,
    });
}

export * as default from "./apis";
