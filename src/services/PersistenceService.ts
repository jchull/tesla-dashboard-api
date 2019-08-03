import {Connection, createConnection} from 'mongoose';
import Configuration, {DEFAULT_CONFIG} from '../model/Configuration';

export class PersistenceService {
  endpoint: string;
  connection?: Connection;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async connect() {
    return createConnection(this.endpoint, {useNewUrlParser: true})
        .then((conn) => {
          this.connection = conn;
          this.connection.on('disconnected', () => {
            console.log('Reconnecting to DB...');
            this.connect();
          });
          return console.log(`Successfully connected to DB`);
        })
        .catch(error => {
          console.log('Error connecting to database: ', error);
          return process.exit(1);
        });
  }

  async getConfiguration() {
    if (this.connection) {
      const confModel = this.connection.model('Configuration');
      return confModel.findOne(null, (err, conf) => {
        if (!conf) {
          console.log('Creating default configuration...');
          return confModel.create(DEFAULT_CONFIG);
        }
        return confModel;
      });
    }
  }


}

