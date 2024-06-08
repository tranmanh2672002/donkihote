import { IPost } from '../interfaces/post.interface';

export interface IErrorValidator {
  key: string;
  message: string;
}

export const createPostValidator = (data: IPost): IErrorValidator[] => {
  const errors: IErrorValidator[] = [];
  const { images } = data;
  if (!images?.length) {
    errors.push({ key: 'images', message: 'Images is required' });
  }
  return errors;
};
