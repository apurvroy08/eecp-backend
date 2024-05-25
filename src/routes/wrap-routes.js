import { appoinmentsRouter } from "./appoinments";
import { centerRouter } from "./center";
import { slotDatesRouter } from "./slotDates";
import { slotsRouter } from "./slots";
import { userRouter } from "./user";


export const wrapRoutes = (app) => {
    appoinmentsRouter(app);
    centerRouter(app);
    slotsRouter(app);
    slotDatesRouter(app);
    userRouter(app);
}