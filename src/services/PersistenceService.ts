import {Mongoose, createConnection} from 'mongoose';
import {IConfiguration} from '../model/Configuration';

export class PersistenceService {
  endpoint: string;
  connection?: Mongoose;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async connect() {
    return createConnection(this.endpoint, { useNewUrlParser: true })
        .then(() => {
          return console.log(`Successfully connected to DB`);
        })
        .catch(error => {
          console.log("Error connecting to database: ", error);
          return process.exit(1);
        });

      // mongoose.connection.on("disconnected", connect);
  }

  async getConfiguration() {
    if (this.connection) {
      const confModel = this.connection.model('Configuration');
      let conf = confModel.findOne();
      if (!conf) {
        confModel.create(DEFAULT_CONFIG);
      }
    }
  }


}


// @ts-ignore
const DEFAULT_CONFIG: IConfiguration = {
  apiPort: 3001,
  ownerBaseUrl: 'https://owner-api.teslamotors.com',
  teslaAuthEmail: '',
  teslaAuthPassword: '',
  teslaClientKey: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
  teslaClientSecret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3'

};

// API_PORT=3001
// OWNER_BASE_URL=https://owner-api.teslamotors.com
// TESLA_CLIENT_ID=81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384
// TESLA_CLIENT_SECRET=c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3
// TESLA_AUTH_EMAIL=
//     TESLA_AUTH_PASSWORD=
//         ES_ENDPOINT=http://elastic:9200
// ES_INDEX=tesla
// POLLING_INTERVAL=60000

