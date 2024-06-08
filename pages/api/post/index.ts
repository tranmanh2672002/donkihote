import { NextApiRequest, NextApiResponse } from 'next';
import { IResponseStatus } from '../../../interfaces/response.interface';
import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/Post';
import { createPostValidator } from '../../../validator/post.validator';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  console.log('method', method);

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find({});
        return res.status(200).json({ status: IResponseStatus.success, data: posts });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Error get post' });
      }
      break;
    case 'POST':
      try {
        console.log(req.body);
        const errors = createPostValidator(req.body);
        if (errors?.length) {
          return res.status(400).json({ status: IResponseStatus.error, errors });
        }
        const post = new Post(req.body);
        await post.save();
        return res.status(200).json({ status: IResponseStatus.success, data: post });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Error create post' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}
