import {Router, Request, Response} from 'express';

import {getUsers} from '../controllers/usuario.controller';

const usuarioRoutes= Router();


usuarioRoutes.get('/lista' , getUsers );



export default usuarioRoutes;