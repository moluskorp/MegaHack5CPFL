import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
    name: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    telephone: string;
    email: string;
    password: string;
    whatsapp: string;
    last_read: number;
    budget: number;
}

class CreateUserService {
    public async execute({
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
    }: Request): Promise<User> {

        const userRepository = getRepository(User);

        const findSameEmail = await userRepository.findOne({
            where: { email },
        });

        if (findSameEmail) {
            return findSameEmail;
        }

        const user = userRepository.create({
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

        const usr = await userRepository.save(user);

        return usr;
    }
}

export default CreateUserService;