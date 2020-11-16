import { Router } from 'express';
import usersRouter from './users.routes';
import previsionsRouter from './previsions.routes';
import noenergyRouter from './noenergy.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/previsions', previsionsRouter);
routes.use('/noenergy', noenergyRouter);

export default routes;