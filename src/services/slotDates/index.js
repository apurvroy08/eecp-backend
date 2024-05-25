import { connectDb } from "../../helpers/mysql/connectDb";

//slot_dates get api
export const getSlotDatesServices = async() => {
    try{
        const conn = connectDb();
        const sql = `select * from slot_dates`;
        const result = await conn.promise().query(sql);
        // console.log(result[0], "result");
        return result[0];
    } catch(err){
        console.log("error in fetching", err);
    }
}

//slot_dates post api
export const createSlotDatesServices = async(slot_dates) => {
    try{
        const conn = connectDb();
        const sql = `insert into slot_dates(slot_dates) values(?)`;
        const result = await conn.promise().query(sql, [slot_dates]);
        return result;

    } catch(err){
        console.log("error in creating", err);
    }
}

// available slot dates
export const getAvailableSlotDatesServices = async() => {
    try{
        const conn = connectDb();
        const sql = `select distinct sd.slot_dates_id, sd.slot_dates  from slot_dates sd
        left join slots s 
        on sd.slot_dates_id  = s.slot_dates_id 
        where s.availability = 1`;
        const result = await conn.promise().query(sql);
        const formattedResult = result[0].map(item => {
            // Convert date object to string in the format YYYY-MM-DD
            const formattedDate = item.slot_dates instanceof Date ? item.slot_dates.toISOString().split('T')[0] : item.slot_dates;
        
            return {
                slot_dates_id: item.slot_dates_id,
                slot_dates: formattedDate
            };
        });
        
        console.log("formattedResult", formattedResult);
        return formattedResult;
    } catch(err){
        console.log("error in fethcing", err);
    }
}
