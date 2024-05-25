import { internalServerError, success } from "../../helpers/api-response";
import { createSlotDatesServices, getAvailableSlotDatesServices, getSlotDatesServices } from "../../services/slotDates"

//create api controllers
export const createSlotDatesControllers = async(req, res) => {
    const {slot_dates} = req.body
    try{
        const result = await createSlotDatesServices(slot_dates);
        return success(req, res, result, "data created successfully");
    }catch(err){
        return internalServerError(req, res, err, "Internal server error");
    }
}

//get api controllers
export const getSlotDatesControllers = async(req, res) => {
    try{
        const result = await getSlotDatesServices();
        return success(req, res, result, "data created successfully");
    }catch(err){
        return internalServerError(req, res, err, "Internal server error");
    }
}

//get slot dates api controllers
export const getAvailableSlotDatesControllers = async(req, res) => {
    try{
        const result = await getAvailableSlotDatesServices();
        return success(req, res, result, "Data fetched successfully");
    } catch(err){
        return internalServerError(req, res, err, "Internal server error");
    }
}