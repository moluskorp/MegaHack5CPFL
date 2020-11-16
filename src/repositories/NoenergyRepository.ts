import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import Noenergy from '../models/Noenergy';

@EntityRepository(Noenergy)
class NoenergyRepository extends Repository<Noenergy> {
    public async getNoenergy(id: string): Promise<any> {
        const findNoenergy = await this.findOne({
            where: {
                client_id: id,
                ocurring: true
            }
        });
        if (!findNoenergy) {
            const noenergy = {
                ocurring: false
            }
            return noenergy;
        }
        const time = findNoenergy.date.getTime();

        const currentTime = (Date.now()) - time;

        findNoenergy.eta = miliToMinutesAndSeconds(currentTime);

        const { minutes, seconds } = findNoenergy.eta;

        if (Number(minutes) <= 0 && Number(seconds) <= 0) {
            const finalNoenergy = setOcurringFalse(findNoenergy);

            return finalNoenergy;
        }

        return findNoenergy;
    }
}

export default NoenergyRepository;

function miliToMinutesAndSeconds(millis: number) {

    const finalMillis = 960000 - millis;

    const minutes = Math.floor(finalMillis / 60000).toFixed(0);

    const seconds = ((finalMillis % 60000) / 1000).toFixed(0);

    return {
        minutes,
        seconds
    }
}

async function setOcurringFalse(noenergy: Noenergy): Promise<Noenergy> {
    const noenergyRepository = getCustomRepository(NoenergyRepository);

    noenergy.ocurring = false;

    const noenergyFinal = await noenergyRepository.save(noenergy);

    return noenergyFinal;
}