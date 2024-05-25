import { createCenter, getCenter } from "../../controllers/center"
export const centerRouter = (app) => {
    app.post('/api/v1/eecp/center/create', createCenter);
    app.get('/api/v1/eecp/center/get', getCenter);
}