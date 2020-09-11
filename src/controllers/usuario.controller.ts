import {Request, Response} from 'express';


import {coneccion} from '../database/coneccion';


export const getUsers = ( req:Request, res: Response) =>{

 coneccion.query('SELECT * FROM users')
 .then( resp =>{

    res.json( resp.rows );

 })
 .catch( err => console.log(err) );

};