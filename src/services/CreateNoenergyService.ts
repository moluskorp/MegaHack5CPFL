import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import NoenergyRepository from '../repositories/NoenergyRepository';

import Noenergy from '../models/Noenergy';

class CreateNoenergyService {
    public async execute(id: string): Promise<Noenergy> {

        const noEnergyRepository = getCustomRepository(NoenergyRepository);

        const date = new Date(Date.now());

        const noenergy = noEnergyRepository.create({
            date,
            client_id: id,
            ocurring: true
        });

        const noenergySaved = await noEnergyRepository.save(noenergy);

        return noenergySaved;
    }
}

export default CreateNoenergyService;