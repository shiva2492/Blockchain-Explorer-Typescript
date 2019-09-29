import { Request, Response } from "express";
import * as request from "request-promise-native";
import { Block } from "../models/block.model";
import { BlockInfo } from "../models/blockinfo.model";

class DataLoader {
    public async getBlockData(req: Request, res: Response) {
        try {
            

            const get_block_list_url = "https://blockchain.info/blocks?format=json";
            let options = {
                uri: get_block_list_url
            };
            const result = await request.get(options);
            res.status(200).send("data load processing");
            let blocks = JSON.parse(result)['blocks']
            for(let i = 0;i < blocks.length; i++)
            {
                let curr_block = blocks[i] ;
                let raw_block_url = "https://blockchain.info/rawblock/"+curr_block['hash'];
                Block.create({
                height: curr_block['height'],
                hash: curr_block['hash'],
                time: curr_block['time'],
                mainchain: curr_block['main_chain'],
                });
                options['uri'] = raw_block_url
                const raw_block_result = await request.get(options);
                let block_info = JSON.parse(raw_block_result)
                BlockInfo.create({
                    size: block_info['size'],
                    blockindex: block_info['block_index'],
                    prevblock: block_info['prev_block'],
                    txns: block_info['tx'],
                    numoftxs: block_info['numoftxns']
                })

            }
            res.status(200).send("data load done");
        }
        catch (err) {
            console.log("error is", err);
            res.status(500).send('Internal Server Error');
        }
    }
}
export default new DataLoader();

