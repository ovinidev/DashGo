import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = [
    { id: 1, name: 'vini' },
    { id: 2, name: 'thales' },
    { id: 3, name: 'jorge' },
    { id: 4, name: 'gustavo' },
  ];

  return res.status(200).json(users);
};