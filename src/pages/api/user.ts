import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const users =  { id: 1, name: 'vini' }

  return res.status(200).json(users);
};