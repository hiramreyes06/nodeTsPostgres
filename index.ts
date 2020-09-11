
import { Response } from 'express';
import bodyParser from "body-parser";




import {Server} from './src/clases/server';


import apiRoutes from './src/rutas/indexApiRoutes';
import { SERVER_PORT } from './src/configuracion/environment';

const servidor = Server.instance;

//Esto convierte los json string en objetos js
servidor.app.use( bodyParser.json() );

//Esto convierte json string anidados en objetos de js application/x-www-form-urlencoded
servidor.app.use( bodyParser.urlencoded( {extended:true}) );


servidor.app.use('/api', apiRoutes);

servidor.app.get('/' , (req:any, res: Response) =>{


res.json({
    ok:true,
    message:'Servidor corriendo bien'
})

});


servidor.app.listen( SERVER_PORT , ()=>{

console.log('El servidor esta en el puerto', SERVER_PORT );

});



