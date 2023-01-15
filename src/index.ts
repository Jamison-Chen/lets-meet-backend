import express from "express";

import middleware from "./middleware";
import { router as accountRouter } from "./account";

const app = express();

// Apply all middlewares
app.use(middleware);

// Make static assets accessible
app.use(express.static("./static"));

// Set routes
app.use("/api/account", accountRouter);

app.all("*", (request, response) => {
    response.status(404).send("Invalid URL");
});

app.listen(8000, "127.0.0.1");
