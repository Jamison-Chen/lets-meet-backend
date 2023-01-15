import { Request, Response, NextFunction } from "express";

export function authorizationMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    next();
}
