import express from "express";
import blockValidation from "../validations/block.validation";

import controller from "../controllers/block.controller";
const router = express.Router();


/**
 * @api {Post} /api/v1/block getBlockList
 * @apiDescription get list of blocks
 * @apiVersion 1.0.0
 * @apiName getblocklist
 * @apiGroup block
 * @apiPermission public
 *
 * @apiParam  {Number}  page        Page number
 * @apiParam  {Number}  page_size   List count
 *
 *
 *
 * @apiSuccess  {number}  id             id
 * @apiSuccess  {String}  hash           hash
 * @apiSuccess  {String}  height         height
 * @apiSuccess  {String}  time           time
 * @apiSuccess  {Date}    mainchain      mainchain
 * @apiSuccess  {number}  createdAt      createdAt
 * @apiSuccess  {String}  updatedAt      updatedAt
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route("/")
    .post( controller.getBlockList);



/**
 * @api {get} /api/v1/block/:id getBlockInfo
 * @apiDescription add a bike into db
 * @apiVersion 1.0.0
 * @apiName getblockinfo
 * @apiGroup block
 * @apiPermission public
 *
 * @apiParam  {String}         id     id
 *
 *
 *
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route("/:id")
    .get( blockValidation("get"), controller.getBlockInfo);

export default router;