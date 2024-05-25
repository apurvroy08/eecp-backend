import { createSlotDatesControllers, getAvailableSlotDatesControllers, getSlotDatesControllers } from "../../controllers/slotDates"

export const slotDatesRouter = (app) => {
    app.get('/api/v1/eecp/slotDates/get', getSlotDatesControllers);
    app.post('/api/v1/eecp/slotDates/create', createSlotDatesControllers);
    app.get('/api/v1/eecp/slotDates/available', getAvailableSlotDatesControllers)
}