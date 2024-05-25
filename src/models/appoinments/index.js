import { connectDb } from "../../helpers/mysql/connectDb";

export const appoinments = () => {

    const conn = connectDb();
    const sql = `create table if not exists appoinments(
        id int auto_increment primary key,
        userId int,
        age int,
        slot_id int,
        center_id int,
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default now() on update now()
    )`;

    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("appoinments table created successfully");

        conn.end();
    })


}