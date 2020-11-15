import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreteUser1605400485821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query
            ('create extension if not exists "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'street',
                        type: 'varchar'
                    },
                    {
                        name: 'number',
                        type: 'varchar'
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar'
                    },
                    {
                        name: 'city',
                        type: 'varchar'
                    },
                    {
                        name: 'state',
                        type: 'varchar'
                    },
                    {
                        name: 'telephone',
                        type: 'varchar'
                    },
                    {
                        name: 'whatsapp',
                        type: 'varchar'
                    },
                    {
                        name: 'last_read',
                        type: 'real'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'budget',
                        type: 'real'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
