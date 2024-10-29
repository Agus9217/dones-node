import { Request, Response, Router } from "express";

export const router = Router()

router
  .get('/', (_req: Request, res: Response) => {
    res.send('Hello from v1 routes')
  })