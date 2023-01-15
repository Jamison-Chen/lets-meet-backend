import { Request, Response, NextFunction } from "express";
import url from "url";

export function logger(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const date = new Date();
    console.log(
        `[${request.method}]`,
        url.parse(request.url).pathname,
        date.toLocaleDateString("af"),
        date.toLocaleTimeString()
    );
    next();
}
