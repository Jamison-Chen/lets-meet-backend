import { Router } from "express";

import apis from "./apis";

const router = Router();

router.get(/^\/ping[/]?$/, apis.ping);
router.post(/^\/ping[/]?$/, apis.ping);
router.post(/^\/register[/]?$/, apis.register);

export default router;
