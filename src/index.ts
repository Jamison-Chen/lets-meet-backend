import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import middleware from "./middleware";
import { router as accountRouter } from "./account";

const app = express();

// Read the .env file
dotenv.config();

// Setup and connect to the database
mongoose.set("strictQuery", false);
mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

// app.set("etag", false);

// Apply all middlewares
app.use(middleware);

// Make static assets accessible
app.use(express.static("./static"));

// Set API routes
app.use(/^\/api\/account/, accountRouter);
app.all("*", (request, response) => {
    response.status(404).send("Invalid URL");
});

app.listen(8000, "127.0.0.1");
