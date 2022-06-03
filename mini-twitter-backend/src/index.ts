import express, { Request, Response } from 'express';
import cors from 'cors';
import mockData from './mock/data.json';
import { db } from './db';

const PORT = 5000;
const app = express().use(express.json()).use(cors());

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}/`);
});

app.get('/', (req: Request, res: Response) => {
  db();

  res.status(200).send(JSON.stringify(mockData));
});
