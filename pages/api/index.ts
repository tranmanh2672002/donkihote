import { NextApiRequest, NextApiResponse } from 'next';
import { IResponseStatus } from '../../interfaces/response.interface';
import dbConnect from '../../lib/dbConnect.js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        return res.status(200).json({ status: IResponseStatus.success, data: 'hello world' });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Error connect' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}
