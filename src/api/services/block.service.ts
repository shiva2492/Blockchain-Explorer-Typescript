import { Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import { Block } from "../models/block.model";
import { BlockInfo } from "../models/blockinfo.model";

class BlockService {

    public async getBlockList(obj: any) {
        try {
            let request_body = obj['body']
            let page = request_body['page'] || 0;
            let page_size = request_body['page_size'] || 10
            let offset = page * page_size
            let limit = offset + page_size

            let blocklist = await Block.findAndCountAll({
                limit,
                offset,
                where:{},
            })
            
            return blocklist;
        }
        catch (err) {
            console.log("error is %s", err);
        }
    }

    public async getBlockInfo(obj: any) {
        try {
            let request_params = obj['params']
            let block_id = request_params['id']
            
            let block = await BlockInfo.findOne({
                where:{
                    id: block_id
                }
            })
            
            return block;
        }
        catch (err) {
            console.log("error is %s", err);
        }
    }
    
}

export default new BlockService();