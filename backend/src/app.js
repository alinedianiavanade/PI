import express from 'express';
import routes from './routes';

const cors = require("cors");

import './database';

class App {
    constructor() {
        this.server = express();

        this.middleware();
        this.routes();
    }

    middleware() {
        var corsOptions = {
            AccessControlAllowOrigin: '*',
            AccessControlAllowCredentials: true,
            AccessControlAllowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
            AccessControlAllowHeaders: '*'
        };
        this.server.use(cors(corsOptions));
        this.server.use(express.json());

    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;