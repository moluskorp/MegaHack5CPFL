import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,

} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    telephone: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    whatsapp: string;

    @Column('real')
    last_read: number

    @Column('real')
    budget: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;