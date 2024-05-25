import { connectDb } from "../../helpers/mysql/connectDb";

//create api
export const create = async(name, address) => {
    try{
        const conn = connectDb();
        const sql = `insert into center(name, address) values(?,?)`;
        const result = conn.promise().query(sql, [name, address]);
        if(result){
            return result;
        }
    } catch(err){
        console.log("error in creating data", err);
    }
}

//get api
export const get = async() => {
    try{
        const conn = connectDb();
        const sql = `select center_id, name, address from center`;
        const result = await conn.promise().query(sql);
        // console.log(result[0], "result");
        return result[0];
    } catch(err){
        console.log("error in fetching data", err);
    }
}
