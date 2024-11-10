import {
  DeleteArticle,
  GetAll,
  GetById,
  SaveArticle,
  UpdateArticle,
} from "@app/controllers";
import express from "express";

const router = express.Router();

router.get("/", GetAll);
router.get("/:id", GetById);
router.post("/", SaveArticle);
router.put("/:id", UpdateArticle);
router.delete("/:id", DeleteArticle);

export default router;
