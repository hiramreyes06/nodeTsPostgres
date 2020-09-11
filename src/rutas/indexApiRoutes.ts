import {Router} from 'express';

import usuariosRoutes from './usuarios';


const apiRoutes = Router();


apiRoutes.use('/usuario', usuariosRoutes );


export default apiRoutes;