import { Router } from "express";
import { disfrutoGetAllController, disfrutoPostController } from "../controllers/disfruto.controller";

export const router = Router()

router
  .get('/', disfrutoGetAllController)
  .post('/', disfrutoPostController)
