import { Router } from 'express';

const previsionsRouter = Router();

import CalculatePrevisionService from '../services/CalculatePrevisionService';

previsionsRouter.post('/', async (request, response) => {

    const { id, read } = request.body;

    const calculatePrevision = new CalculatePrevisionService();

    const prevision = await calculatePrevision.execute({ id, read });

    return response.json(prevision);
});

previsionsRouter.get('/', async (request, response) => {

});

export default previsionsRouter;