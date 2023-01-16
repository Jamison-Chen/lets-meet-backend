import { Router } from "express";

import views from "./apis";

const router = Router();

router.get(/^\/ping[/]?$/, views.ping);
router.post(/^\/register[/]?$/, views.register);

export default router;
