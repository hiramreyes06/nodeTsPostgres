import {Router} from 'express';

import 
{ 
getUsers, getUserById, createUser, deleteUser, updateUser   
} from '../controllers/usuario.controller';

const usuarioRoutes= Router();


usuarioRoutes.get('/lista' , getUsers );

usuarioRoutes.get('/:id',  getUserById );

usuarioRoutes.post('/crear', createUser);

usuarioRoutes.delete('/:id', deleteUser );

usuarioRoutes.put('/:id', updateUser );



export default usuarioRoutes;