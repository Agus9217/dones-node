import { Request, Response } from "express";

export const disfrutoGetAllController = async (_req: Request, res: Response) => {
  res.send('Hello from Controller')
}
