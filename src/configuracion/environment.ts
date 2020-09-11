
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


export const SERVER_PORT: number = Number( process.env.PORT ) || 3000;


export const tokenSeed:string = process.env.SEED || 'seed-de-prueba';

let baseDatos;

if( process.env.NODE_ENV === 'dev' ){
    baseDatos ='asdasd'
}else{
    baseDatos=process.env.BDURL; 
}

process.env.URLBASED = baseDatos;
