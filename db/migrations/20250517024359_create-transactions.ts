// metodos UP e DOWN => Basicamente o DOWN é um rollback, ou seja se no UP vc cria uma tabela, no DOWN vc deleta essa tabela e etc... 

import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', (table) =>{
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')
}

