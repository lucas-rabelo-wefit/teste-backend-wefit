import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';

import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const serverHttp = http.createServer(app);

export { serverHttp };