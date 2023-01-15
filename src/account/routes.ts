import { Router } from "express";

import views from "./apis";

const router = Router();

router.get(/^\/ping[/]?$/, views.ping);
router.post(/^\/create-user[/]?$/, views.createUser);

export default router;
