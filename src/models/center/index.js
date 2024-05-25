import { connectDb } from "../../helpers/mysql/connectDb";

export const center = () => {

    const conn = connectDb();
    const sql = `create table if not exists center(
        center_id int auto_increment primary key,
        name varchar(255),
        address varchar(255),
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default now() on update now()
    )`;

    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("center table created successfully");

        conn.end();
    })

}