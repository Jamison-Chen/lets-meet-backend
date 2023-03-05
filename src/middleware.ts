import express from "express";
import cors from "cors";

import { authorizationMiddleware } from "./account";
import { loggerMiddleware } from "./core";

export default [
    loggerMiddleware,
    cors(),
    express.urlencoded({ extended: true }),
    express.json(),
    authorizationMiddleware,
];
