const envfile = process.argv[2] || './config/.env';
require('dotenv')
    .config({path: envfile});
const config = Object.assign({}, process.env);
let appConfig = {
  API_PORT: 7007
};


import http from 'http';
import express from 'express';
import {applyMiddleware, applyRoutes} from './util';
import routes from './routes';
import middleware from './middleware';
import {PersistenceService} from './services/PersistenceService';

const router = express();
applyMiddleware(middleware, router);
// @ts-ignore
applyRoutes(routes, router);


// @ts-ignore
const db = new PersistenceService(config.DB_CONN);
db.connect()
                  .then(() => db.getConfiguration())
                  .then((a:any) => {
                    const server = http.createServer(router);
                    server.listen(appConfig.API_PORT, () =>
                        console.log(`Server is running at http://localhost:${appConfig.API_PORT} ...`));

                    return server;
                  });
// TODO: Start DataSyncService


