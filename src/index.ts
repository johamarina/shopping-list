import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running on port: ${port}`);
});