import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    PrimaryColumn,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn,
    JoinColumn,

} from 'typeorm';

import User from './User';

@Entity('noenergy')
class Noenergy {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    client_id: string;

    @Column('boolean')
    ocurring: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'client_id' })
    user: User;

    eta: {
        minutes: string;
        seconds: string;
    }

    @Column('timestamp')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /*constructor({ ocurring }: Omit<Noenergy, 'id' | 'client_id' | 'user' | 'date' | 'created_at' | 'updated_at'>) {
        this.ocurring = ocurring;
    }*/
}

export default Noenergy;