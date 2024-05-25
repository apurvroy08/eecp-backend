import {
    badRequest,
    internalServerError,
    success,
} from "../../helpers/api-response";

import { createdatauser, createutm, getKnownUsers, getalluser, getunKnownUsers, } from "../../services/user";

// create user controllers
export const createuser = async (req, res) => {
    const { name, phone, email, utm_source, utm_medium, utm_campaign, message, center_id } = req.body;
    // if (!name) {
    //     return badRequest(req, res, "name is required !");
    // }
    // if (!email) {
    //     return badRequest(req, res, "email is required !");
    // }
    // if (!phone) {
    //     return badRequest(req, res, "phone is required !");
    // }
    // if (!message) {
    //     return badRequest(req, res, "message is required !");
    // }
    try {
        const result = await createdatauser(
            name,
            phone,
            email,
            utm_source,
            utm_medium,
            utm_campaign,
            message,
            center_id

        );
        if (result) {
            return success(req, res, result, "Data created successfully");
        }
    } catch (err) {
        return internalServerError(req, res, err, "Internal server error");
    }
};
// getalluser
export const getalluserdata = async (req, res) => {
    try {
        const result = await getalluser();
        return success(req, res, result, "Data fetched successfully");
    } catch (error) {
        return internalServerError(req, res, error, "Internal server error");
    }
};

// getknownuser



export const getKnownUsersdata = async (req, res) => {
    try {

        const users = await getKnownUsers();

        return success(req, res, users, "Data fetched successfully");
    } catch (error) {
        console.error('Error retrieving known users:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


// getunknownuser

export const getunKnownUsersdata = async (req, res) => {
    try {

        const users = await getunKnownUsers();

        if (users.length === 0) {
            return res.status(404).json({ message: 'No unknown users found' });
        }
        return res.status(200).json({ users, message: 'Unknown users fetched successfully' });
    } catch (error) {
        console.error('Error retrieving unknown users:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


