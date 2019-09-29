

import { errorMessage,
    version } from "../../util/constants";

// import * as expressValidation from "express-validation";
import * as HttpStatus from "http-status";
import CustomResponse from "../../util/response";
import { Request, Response } from "express";
class HandleError {

    /**
     *
     * @param {*} err:
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @return {*}
     */
    public converter(err: any, req: Request, res: Response, next: any) {
        // if (err instanceof expressValidation.ValidationError) {
        //     return CustomResponse.setResponse(res, false, err.status, errorMessage.VALIDATION_ERROR, version.v1, err.errors);
        // }
    }
    /**
     * Catch 404 and forward to error handler
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @return {*}
     */
    public notFound(req: Request, res: Response, next: any) {
        CustomResponse.setResponse(res, false, HttpStatus.NOT_FOUND, errorMessage.NOT_FOUND, version.v1, {});
    }



}

export default new HandleError();