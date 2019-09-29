import express from "express";

import controller from "../controllers/dataloader.controller";
const router = express.Router();


/**
 * @api {get} /api/v1/load/ load data
 * @apiDescription load the data into database
 * @apiVersion 1.0.0
 * @apiName add
 * @apiGroup loader
 * @apiPermission public
 *
 *
 *
 *
 * @apiSuccess  {String}  message   success
 *
 * @apiError (Internal Server Error 500) unable to get data from the https://blockchain.info API
 */
router.route("/")
    .get( controller.getBlockData);

export default router;