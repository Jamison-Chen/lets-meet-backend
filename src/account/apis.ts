import { Request, Response } from "express";

import { User } from "./models";

export async function createUser(
    request: Request,
    response: Response
): Promise<Response> {
    const { name, email } = request.body;

    let res: any = { success: false };

    let a = new User({ name, email });

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
