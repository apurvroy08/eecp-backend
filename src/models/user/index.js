import { connectDb } from "../../helpers/mysql/connectDb";

export const usertable = () => {

    const conn = connectDb();
    const sql = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        phone BIGINT,
        email VARCHAR(100),
        utm_source VARCHAR(255),
        utm_medium VARCHAR(255),
        utm_campaign VARCHAR(255),
        message VARCHAR(255) DEFAULT 'center',
        center_id INT, -- Assuming INT for center_id
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
    )`;
    

    conn.query(sql, function(err, result){  
        if(err) throw err;
        console.log("usertable created successfully");
    
        conn.end();
    })


}