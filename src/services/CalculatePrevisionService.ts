import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
    id: 'string';
    read: number;
}

interface Prevision {
    kwh: number;
    total: number;
    porcentBudget: number;
}

class CalculatePrevisionService {
    public async execute({ id, read }: Request): Promise<Prevision> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        if (!user) {
            throw new AppError("Only authenticated users can calculate prevision");
        }

        const { budget, last_read } = user;

        const kwh = read - last_read;

        const total = kwh * 0.38;

        const porcentBudget = (total * 100) / budget;

        const prevision = {
            kwh,
            total,
            porcentBudget
        };

        return prevision;
    }
}

export default CalculatePrevisionService;
