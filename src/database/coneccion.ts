import { Pool } from 'pg';

//Pool es un obj que permite hacer consultas a la bd
export const coneccion = new Pool({
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'pracica',
    port: 5432
})