import logger from "../utils/logger.js";

export function sendResponse(res,statusCode,data){
    const isError = statusCode >=400;
    if(isError)
    logger.error(data);
    res.status(statusCode).json(data);
}