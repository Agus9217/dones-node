import { Router } from "express";
import { disfrutoGetAllController } from "../controllers/disfruto.controller";

export const router = Router()

router
  .get('/', disfrutoGetAllController)
