import { success, badRequest, internalServerError } from "../../helpers/api-response"
import { create, get } from "../../services/center";

// create api controller
export const createCenter = async(req, res) => {
    const{name, address} = req.body;
    if(!name || !address){
        return badRequest(req, res, "Unprocessible entity");
    }
    try{
        const result = await create(name, address);
        if(result){
            return success(req, res, result, "Data created successfully");
        }
    } catch(err){
        return internalServerError(req, res, err, "Internal server error");
    }
}

// get api controller
export const getCenter = async(req, res) => {
    try{
        const result = await get();
        return success(req, res, result, "data fetched successfully");
    } catch(err){
        return internalServerError(req, res, err, "Internal srever error");
    }
}