import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
    user_id: string;
    budget: number
}

class UpdateBudgetService {
    public async execute({ user_id, budget }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(user_id);

        if (!user) {
            throw new AppError('Only authenticated users can change budget');
        }

        user.budget = budget;

        await userRepository.save(user);

        return user;
    }
}

export default UpdateBudgetService;