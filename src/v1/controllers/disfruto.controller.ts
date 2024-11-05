import { Request, Response } from "express";
import { Checklist } from "../models";

export const disfrutoGetAllController = async (req: Request, res: Response) => {
  const data = await Checklist.find({})
  res.send({data: data})
}

export const disfrutoPostController = async (req: Request, res: Response) => {
  console.log(req)
  res.send({ data: 'Hola desde el post' })
}
