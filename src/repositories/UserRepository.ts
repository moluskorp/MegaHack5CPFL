import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async getUser(): Promise<User> {
        const findUser = await this.findOne({
            where: {
                email: 'joao@joao'
            }
        });

        if (findUser) {
            return findUser
        }

        const user = this.create({
            name: "João",
            street: "Av Saudade",
            number: "123",
            neighborhood: "Campos Eliseos",
            city: "Ribeirao Preto",
            state: "SP",
            telephone: "1639692955",
            email: "joao@joao",
            password: "123",
            whatsapp: "16996040011",
            last_read: 10,
            budget: 200
        });

        const usr = await this.save(user);

        return usr;
    }
}

export default UserRepository;