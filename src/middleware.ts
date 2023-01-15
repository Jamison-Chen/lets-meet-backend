import express from "express";

import { authorizationMiddleware } from "./account";
import { logger } from "./core";

export default [
    logger,
    express.urlencoded({ extended: true }),
    express.json(),
    authorizationMiddleware,
];
