import express from "express";
import blockRoute from "./block.route";
import dataloadRoute from "./dataloader.route";
const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.status(200).send("OK"));
/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/load", dataloadRoute);

router.use("/block", blockRoute);

export default router;
