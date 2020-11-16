import UserRepository from '../repositories/UserRepository';

import { getCustomRepository } from 'typeorm';

import User from '../models/User';

export default async function getUser(): Promise<User> {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.getUser();

    return user;
}