import { connectDb } from "../../helpers/mysql/connectDb"

export const slots = () => {

    const conn = connectDb();
    const sql = `create table if not exists slots(
        slot_id int auto_increment primary key,
        slot_dates_id int, 
        start_slot_time time,
        end_slot_time time,
        availability bool,
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default now() on update now()
    ) `;
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("slots table created successfully");
    })
}