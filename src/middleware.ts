import express from "express";
import cors from "cors";

import { authorizationMiddleware } from "./account";
import { logger } from "./core";

export default [
    logger,
    cors(),
    express.urlencoded({ extended: true }),
    express.json(),
    authorizationMiddleware,
];
