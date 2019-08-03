import {Request, Response} from 'express';
import Vehicle from '../model/Vehicle';

const routes = [
  {
    path: '/vehicle',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      const vehicles = await Vehicle.find();
      res.status(200)
         .json(vehicles);
    }
  },
  {
    path: '/vehicle/:id_s',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      const id_s = req.params.id_s;
      const vehicle = await Vehicle.find({id_s});
      res.status(200)
         .json(vehicle);

      // TODO: 404
    }
  },
  {
    path: '/vehicle/:id_s',
    method: 'put',
    handler: async (req: Request, res: Response) => {
      const vehicle = await Vehicle.create(req.body);
      console.log(`Vehicle created: ${vehicle}`);
      res.status(200)
         .json(vehicle);
    }
  },
  {
    path: '/vehicle/:id_s',
    method: 'delete',
    handler: async (req: Request, res: Response) => {
      const id_s = req.params.id_s;
      await Vehicle.findOneAndDelete({id_s});
      res.status(200).send('vehicle deleted');
    }
  }
];

export default [...routes];
