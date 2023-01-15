import { RequestHandler } from "express";

export const ping: RequestHandler = (request, response) => {
    response.json({
        data: "pong",
        message: request.query.message,
    });
};

export const test_post: RequestHandler = (request, response) => {
    response.json(request.body);
};

export * as default from "./views";
