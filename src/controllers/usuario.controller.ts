import {Request, Response} from 'express';


import { coneccion } from '../database/coneccion';


export const getUsers = ( req:Request, res: Response) =>{

 coneccion.query('SELECT * FROM users')
 .then( resp => res.json( resp.rows ) )
 .catch( err => res.status(400).json( err ) );

};

export const getUserById =( req: Request, res: Response) =>{


coneccion.query(`SELECT * FROM users WHERE id = ${ parseInt( req.params.id ) }`)
.then( resp => res.json( resp.rows ) )
.catch( err => res.status(400).json( err ));

  

};

export const createUser =( req: Request, res: Response) =>{

//Destructuracion de un objeto
const { name, email } = req.body;

   coneccion.query(
   `INSERT INTO users (name, email)
   VALUES('${name}', '${email}')
   `)
   .then( () =>

      res.json({
         ok:true,
         usuario:{
            name,
            email
         }
      })

   )
   .catch(err => res.status(400).json( err ) );


};

export const deleteUser =( req: Request, res: Response) =>{

   coneccion.query(`DELETE FROM users WHERE id = ${ parseInt( req.params.id )}` )
   .then( () =>

   res.json({
      ok:true,
      mensaje:'Se elimino el usuario con el id '+ req.params.id
   })

   )
   .catch( err => res.status(400).json( err ) );


};

export const updateUser =( req: Request, res: Response) =>{

   const { name, email } = req.body;

   coneccion.query(`UPDATE users SET name= '${name}', email= '${email}' WHERE id= ${ parseInt( req.params.id)}` )
   .then( () =>

   res.json({
      ok:true,
      mensaje:'Se actualizo el usuario',
      usuario:{
         name,
         email,
         id:req.params.id
      }
   })
   )
   .catch( err => res.status(400).json( err ) );

};



//export const createUser =( req: Request, res: Response) =>{};