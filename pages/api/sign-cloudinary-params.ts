import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { paramsToSign } = req.body;
  console.log(
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
  );
  console.log(paramsToSign);
  const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET as string);

  res.status(200).json({ signature });
}
