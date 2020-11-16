import { Router } from 'express';

import { getRepository, getCustomRepository } from 'typeorm';

import NoenergyRepository from '../repositories/NoenergyRepository';
import CreateNoenergyService from '../services/CreateNoenergyService';

import getUser from '../config/userRegistry';



const noenergyRouter = Router();

noenergyRouter.get('/', async (request, response) => {

    const { id } = await getUser();

    const noenergyRepository = getCustomRepository(NoenergyRepository);

    const noenergy = await noenergyRepository.getNoenergy(id);

    return response.json(noenergy);
});

noenergyRouter.post('/', async (request, response) => {

    const { id } = await getUser();

    const createNoenergy = new CreateNoenergyService();

    const noenergy = await createNoenergy.execute(id);

    console.log(noenergy);

    return response.json(noenergy);
});

export default noenergyRouter;