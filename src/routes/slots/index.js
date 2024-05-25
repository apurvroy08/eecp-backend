import {
  createSlots,
  avialableSlots,
  getAvailableSlotByDateControllers,
  getAvailableSlotDateControllers,
} from "../../controllers/slots";
export const slotsRouter = (app) => {
  app.post("/api/v1/eecp/slots/create", createSlots);
  app.get("/api/v1/eecp/slots/available", avialableSlots);
  app.post(
    "/api/v1/eecp/slots/availableByDate",
    getAvailableSlotByDateControllers
  );
  app.get("/api/v1/eecp/slots/availableDate", getAvailableSlotDateControllers)
};
