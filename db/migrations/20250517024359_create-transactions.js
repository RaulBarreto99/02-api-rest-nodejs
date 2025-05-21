"use strict";
// metodos UP e DOWN => Basicamente o DOWN é um rollback, ou seja se no UP vc cria uma tabela, no DOWN vc deleta essa tabela e etc... 
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary();
        table.text('title').notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable('transactions');
}
