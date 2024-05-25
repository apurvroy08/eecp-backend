import { getAppoinments, createAppoinments, cancelAppoinments } from "../../controllers/appoinments";
export const appoinmentsRouter = (app) => {
    app.get('/api/v1/eecp/appoinments/get', getAppoinments);
    app.post('/api/v1/eecp/appoinments/create', createAppoinments);
    app.delete('/api/v1/eecp/appoinments/cancel/:id', cancelAppoinments);
}