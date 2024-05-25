import { application } from "express";
import { connectDb } from "../../helpers/mysql/connectDb";

//create slot api
export const create = async (slotDate, startSlotTime, endSlotTime, availability) => {
  try {
    const conn = connectDb();
    const sql = `insert into slots(slot_dates_id, start_slot_time, end_slot_time, availability) values(?, ?, ?, ?)`;
    const result = conn
      .promise()
      .query(sql, [slotDate, startSlotTime, endSlotTime, availability]);
    if (result) {
      return result;
    }
  } catch (err) {
    console.log("error in creatin data", err);
  }
};

// update slot api
export const update = async (id, val) => {
  try {
    const conn = connectDb();
    const sql = `update slots set availability = ${val} where slot_id = ${id}`;
    const result = await conn.promise().query(sql);
    if (result) {
      console.log("update", result);
      return result;
    }
  } catch (err) {
    console.log("error in updating", err);
  }
};

// get slot api
export const getSlots = async () => {
  try {
    const conn = connectDb();
    const sql = `SELECT * FROM slots WHERE availability=1`;
    const result = await conn.promise().query(sql);
    console.log("slots", result);
    return { result: result[0], message: "available slots" };
  } catch (err) {
    console.log("error in getSlots", err);
    return {
      result: null,
      message: "error in getting slots",
      error: err.message,
    };
  }
};

//getAvailableSlot by date api
export const getAvailableSlotsByDateServices = async(date_id) => {
  try{
    const conn = connectDb();
    const sql = `select slot_id, slot_dates_id, start_slot_time, end_slot_time from slots where slot_dates_id = ? and availability = 1 `;
    const result = await conn.promise().query(sql, [date_id]);
      return result[0];
  } catch(err){
    console.log("error in fetching", err);
    return null;
  }
}

// get available slot date application
export const getAvailableSlotDateServices = async() => {
  try{
    const conn = connectDb();
    const sql = `select slot_dates_id from slots where availability = 1`;
    const result = await conn.promise().query(sql);
    console.log("result",result[0]);
    let stringDates = [...new Set(result[0].map(item => item.slot_date))];
    console.log("stringDates",stringDates);
    

    return result[0];
  } catch(err){
    console.log("error in fetching", err);
    return null;
  }
}


