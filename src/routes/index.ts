import { Router } from 'express';
import usersRouter from './users.routes';
import previsionsRouter from './previsions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/previsions', previsionsRouter);

export default routes;