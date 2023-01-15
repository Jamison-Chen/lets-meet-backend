import { Router } from "express";

import views from "./views";

const router = Router();

router.get("/ping", views.ping);
router.post("/post", views.test_post);

export default router;
