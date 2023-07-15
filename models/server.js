import express from 'express';
import cors from 'cors';
import { router } from '../routes/user.router.js';


export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.usuariosPath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en: ', this.port);
        });
    }
}

