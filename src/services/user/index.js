import { connectDb } from "../../helpers/mysql/connectDb";

export const createdatauser = async (name, phone, email, utm_source, utm_medium, utm_campaign, message, center_id) => {
    try {
        const conn = connectDb();
        const sql = `INSERT INTO users(name, phone, email, utm_source, utm_medium, utm_campaign, message, center_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        const result = await conn
            .promise()
            .query(sql, [name, phone, email, utm_source, utm_medium, utm_campaign, message, center_id]);
        if (result) {
            return result;
        }
    } catch (err) {
        console.log("error in creatin data", err);
    }
};

// getalluser

export const getalluser = async () => {
    try {
        const conn = connectDb();
        const sql = `SELECT * FROM users`;
        const [result] = await conn.promise().query(sql);
        console.log("result ", result);
        return result;
    } catch (err) {
        console.error("error in fetching data", err);
        throw err;
    }
};

// knownuser
export const getKnownUsers = async () => {
    try {
        const conn = connectDb();
        const sql = 'SELECT * FROM users WHERE email IS NOT NULL or phone IS NOT NULL';
        const results = await new Promise((resolve, reject) => {
            conn.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        return results;
    } catch (error) {
        throw error;
    }
}  

export const getunKnownUsers = async () => {
    try {
        const conn = connectDb();
        const sql = 'SELECT * FROM users WHERE email IS NULL AND phone IS NULL';
        const results = await new Promise((resolve, reject) => {
            conn.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        return results;
    } catch (error) {
        throw error;
    }
}






