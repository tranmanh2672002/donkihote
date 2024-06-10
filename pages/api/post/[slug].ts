import { NextApiRequest, NextApiResponse } from 'next';
import { IResponseStatus } from '../../../interfaces/response.interface';
import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/Post';
import { createPostValidator } from '../../../validator/post.validator';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const id = req.query?.slug;
  console.log('method', method);

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        if (!id) {
          return res.status(400).json({ status: IResponseStatus.error, message: 'Id is required' });
        }
        const post = await Post.findById(id);
        return res.status(200).json({ status: IResponseStatus.success, data: post });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Error get post' });
      }
      break;
    case 'PATCH':
      try {
        if (!id) {
          return res.status(400).json({ status: IResponseStatus.error, message: 'Id is required' });
        }
        const errors = createPostValidator(req.body);
        if (errors?.length) {
          return res.status(400).json({ status: IResponseStatus.error, errors });
        }
        const newPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ status: IResponseStatus.success, data: newPost });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Error update post' });
      }
      break;
    case 'DELETE':
      try {
        if (!id) {
          return res.status(400).json({ status: IResponseStatus.error, message: 'Id is required' });
        }
        await Post.deleteOne({ _id: id });
        return res.status(200).json({ status: IResponseStatus.success, data: id });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Error delete post' });
      }
      break;
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}
