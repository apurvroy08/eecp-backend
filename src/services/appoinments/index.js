import { connectDb } from "../../helpers/mysql/connectDb";

// get appoinments api
export const get = async () => {
  try {
    const conn = connectDb();
    const sql = `select u.name, a.age, u.phone, sd.slot_dates, s.start_slot_time, s.end_slot_time, c.name as center_name  from eecp.appoinments a 
    left join slots s 
    on a.slot_id = s.slot_id 
    left join slot_dates sd 
    on sd.slot_dates_id = s.slot_dates_id 
    left join center c 
    on a.center_id = c.center_id 
    left join users u 
    on u.id = a.userId `;
    const [result] = await conn.promise().query(sql);
    console.log("result from service", result);
    return result;
  } catch (err) {
    console.error("error in fetching data", err);
    throw err; // Propagate the error to be handled by the controller
  }
};

//create appoinments api
export const create = async (
  name,
  phone,
  email,
  utm_source,
  utm_medium,
  utm_campaign,
  message,
  age,
  slot_id,
  center_id
) => {
  try {
    const conn = connectDb();

    const slotExist = `select availability from slots where slot_id = ?`;
    const existingSlot = await conn.promise().query(slotExist, [slot_id]);
    if (existingSlot) {
      console.log("existingSlot", existingSlot[0][0].availability);
    }

    if (existingSlot[0][0].availability === 0) {
      return "not available";
    }
    //creating user
    const user = `INSERT INTO users(name, phone, email, utm_source, utm_medium, utm_campaign, message, center_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const createUser = await conn
      .promise()
      .query(user, [
        name,
        phone,
        email,
        utm_source,
        utm_medium,
        utm_campaign,
        message,
        center_id,
      ]);

    const userId = createUser[0].insertId;

    const sql = `insert into appoinments(userId, age, slot_id, center_id) values(?, ?, ?, ?)`;
    const result = await conn
      .promise()
      .query(sql, [userId, age, slot_id, center_id]);
    if (result) {
      return result;
    }
  } catch (err) {
    console.log("error in creating data", err.message);
  }
};

//cancel apoinments api
export const cancel = async (id) => {
  try {
    const conn = connectDb();
    const sql = `delete from appoinments where id = ${id}`;
    const result = conn.promise().query(sql);
    return result;
  } catch (err) {
    console.log("error in cancelling", err);
  }
};

//get apoinments by id
export const getByid = async (id) => {
  try {
    const conn = connectDb();
    const sql = `select slot_id from appoinments where id = ${id}`;
    const [result] = await conn.promise().query(sql);
    console.log("result", result[0].slot_id);
    if (result.length === 0) {
      console.log("No appoinments found");
    }
    return result[0].slot_id;
  } catch (err) {
    console.log("error in fetching", err);
  }
};
