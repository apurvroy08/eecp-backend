import {
  badRequest,
  internalServerError,
  success,
} from "../../helpers/api-response";
import { create, getAvailableSlotDateServices, getAvailableSlotsByDateServices, getSlots } from "../../services/slots";

// create slot controllers
export const createSlots = async (req, res) => {
  const { slotDate, startSlotTime, endSlotTime, availability } = req.body;
  if (!slotDate || !startSlotTime || !endSlotTime || !availability) {
    return badRequest(req, res, "Unprocessible entity");
  }
  try {
    const result = await create(
      slotDate,
      startSlotTime,
      endSlotTime,
      availability
    );
    if (result) {
      return success(req, res, result, "Data created successfully");
    }
  } catch (err) {
    return internalServerError(req, res, err, "Internal server error");
  }
};

// available slot controllers
export const avialableSlots = async (req, res) => {
  try {
    const result = await getSlots();
    return success(req, res, result, "Data fetched successfully");
  } catch (error) {
    return internalServerError(req, res, error, "Internal server error");
  }
};

//get slot time by data and availability
export const getAvailableSlotByDateControllers = async(req, res) => {
    const {date_id} = req.body;
    // if(!date_id){
    // return badRequest(req, res, "Unprocessible entity");
    // }
    try{
        const result = await getAvailableSlotsByDateServices(date_id);
        if(result){
            return success(req, res, result, "Date fetched successfully");
        }
    } catch(err){
        return internalServerError(req, res, err, "Internal server error");
    }
}

//get available slot date 
export const getAvailableSlotDateControllers = async(req, res) => {

    try{
        const result = await getAvailableSlotDateServices();
        // console.log(result, "result");
        if(result){
            return success(req, res, result, "Data fetched successfully");
        } 
    } catch(err){
        return internalServerError(req, res, err, "Internal server error");
    }
}