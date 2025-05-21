import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

//process.env => variavel global que expõe as informaçoes do arquivo .env
//console.log(process.env)

export const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations:{
        extension: 'ts',
        directory: './db/migrations',
    }
}

export const knex = setupKnex(config)