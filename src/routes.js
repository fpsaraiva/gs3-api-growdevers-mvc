import { Router } from 'express';

import GrowdeverController from './app/controllers/GrowdeverController';

import logRequestsMiddleware from './app/middlewares/logRequests';
import validateGrowdeverIdMiddleware from './app/middlewares/validateGrowdeverId';

const routes = new Router();

routes.use(logRequestsMiddleware);
routes.use('/growdevers/:id', validateGrowdeverIdMiddleware);

routes.get('/growdevers', GrowdeverController.index);
routes.get('/growdevers/:id', GrowdeverController.show);
routes.post('/growdevers', GrowdeverController.store);
routes.put('/growdevers/:id', GrowdeverController.update);
routes.delete('/growdevers/:id', GrowdeverController.delete);

export default routes;
