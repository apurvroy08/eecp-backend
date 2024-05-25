import express from "express";
import cors from "cors";
import { connectDb } from "./helpers/mysql/connectDb";
connectDb();
// import { appoinments } from "./models/appoinments";
// appoinments();
// import { center } from "./models/center";
// center();
// import { slots } from "./models/slots";
// slots();
// import { slotDates } from "./models/slotDates";
// slotDates();
// import {usertable} from"./models/user";
// usertable();
import { wrapRoutes } from "./routes/wrap-routes";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello");
})

const port = process.env.PORT || 8080;
wrapRoutes(app);
app.listen(port, () => {
    console.log("Server is running on port", port);
})