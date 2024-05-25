import { createuser, getKnownUsersdata, getalluserdata, getunKnownUsersdata } from "../../controllers/user";

export const userRouter = (app) => {
    app.post("/api/v1/eecp/user/create", createuser);
    // app.post("/api/v1/eecp/utm_source/create", createutmdata);
    app.get("/api/v1/eecp/user/fetchAll",getalluserdata );
    app.get("/api/v1/eecp/user/fetchknown",getKnownUsersdata );
    app.get("/api/v1/eecp/user/fetchunknown",getunKnownUsersdata );
    
    
};
    