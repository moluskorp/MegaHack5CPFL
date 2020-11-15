import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';
import UpdateBudgetService from '../services/UpdateBudgetService';

const usersRouter = Router();

import User from '../models/User';

usersRouter.get('/', async (request, response) => {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return response.json(users);
});

usersRouter.post('/', async (request, response) => {

    const {
        name,
        street,
        number,
        neighborhood,
        city,
        state,
        telephone,
        email,
        password,
        whatsapp,
        last_read,
        budget
    } = request.body;


    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name,
        street,
        number,
        neighborhood,
        city,
        state,
        telephone,
        email,
        password,
        whatsapp,
        last_read,
        budget
    });

    delete user.password;

    return response.json(user);
});

usersRouter.patch('/:id', async (request, response) => {
    const { id } = request.params;
    const { budget } = request.body;

    const updateUserBudget = new UpdateBudgetService();

    const user = await updateUserBudget.execute({
        user_id: id,
        budget
    });

    delete user.password;

    return response.json(user);
});

export default usersRouter;