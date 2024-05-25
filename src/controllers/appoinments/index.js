import {
  success,
  badRequest,
  internalServerError,
} from "../../helpers/api-response";
import { get, create, cancel, getByid } from "../../services/appoinments";
import { getSlots, update } from "../../services/slots";

//get api controllers
export const getAppoinments = async (req, res) => {
  try {
    const result = await get();
    if (result) {
      console.log("result", result);
      return success(req, res, result, "data fetched successfully");
    }
  } catch (err) {
    return internalServerError(req, res, err, "Internal server error");
  }
};

// create api controllers
export const createAppoinments = async (req, res) => {
  const { name, phone, email, utm_source, utm_medium, utm_campaign, message, age, slot_id, center_id } = req.body;
  try {
    const result = await create(name, phone, email, utm_source, utm_medium, utm_campaign, message, age, slot_id, center_id);
    if (result) {
      if(result === 'not available'){
        return badRequest(req, res, "This slot is not available");
      }
      await update(slot_id, 0);     //updating slot avalibility of slots table
      return success(req, res, result, "Your appoinment has booked");
    } 
  } catch(err) {
    return internalServerError(req, res, err, "Internal server error");
  }
};

// cancel appoinmenets controllers
export const cancelAppoinments = async(req, res) => {
  const {id} = req.params;
  try{
    const slot_id = await getByid(id);
    console.log("slot_id", slot_id);
    const result = await cancel(id);
    console.log("result", result);
    await update(slot_id, 1);
    if(result){
      return success(req, res, result, "Appoinment cancelled");
    }
  } catch(err){
    return internalServerError(req, res, err, "Internal server error");
  }
}
