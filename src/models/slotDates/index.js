import { connectDb } from "../../helpers/mysql/connectDb";

export const slotDates = () => {
    const conn = connectDb();
    const sql = `create table if not exists slot_dates(
        slot_dates_id int auto_increment primary key,
        slot_dates date,
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default now() on update now()
    )`;
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("slot_dates table created successfully");
    })
}