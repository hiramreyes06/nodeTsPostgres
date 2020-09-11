
import express from 'express';


export class Server{

public app: express.Application;

private static _instance : Server;

constructor() {
    
    this.app = express();

}


public static get instance() {
    return this._instance || ( this._instance = new this() );
}









}