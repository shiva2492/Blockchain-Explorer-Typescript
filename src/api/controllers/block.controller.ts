import { Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import BlockService from "../services/block.service"
import { Block } from "../models/block.model";

class BlockController {

    public async getBlockList(req: Request, res: Response) {
        try {
            // Validation error handling
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            let req_obj = {
                body: req['body'],
                query: req['query'],
                params: req['params'],
            }

            let block_list = await BlockService.getBlockList(req_obj)
            return res.status(200).send(block_list);
        }
        catch (err) {
            console.log("error is", err);
        }
    }

    public async getBlockInfo(req: Request, res: Response) {
        try {

            // Validation error handling
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            let req_obj = {
                body: req['body'],
                query: req['query'],
                params: req['params'],
            }
            let block_info = await BlockService.getBlockInfo(req_obj)
            return res.status(200).send(block_info);
        }
        catch (err) {
            console.log("error is", err);
        }
    }
}

export default new BlockController();