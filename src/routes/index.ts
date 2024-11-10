import express from "express";
import cors from "cors";
import articles from "./article";

const router = express.Router();

router.use(
  cors({
    origin: "*",
  })
);

router.use("/items", articles);

export default router;
