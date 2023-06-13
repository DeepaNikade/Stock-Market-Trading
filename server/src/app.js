import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { userRoute, invalidRoute } from "./routes/index.js";
import { SERVER_PORT } from "./utils/config.js";
import logger from "./utils/logger.js";
import { connectMssql, connectRedis } from "./connection/index.js";
import syncMssql from "./utils/sync.js";

const app = express();

// middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan(":status :method :url :response-time ms"));

// routes
// invalid routes
// app.use(invalidRoute);

// valid routes
app.use("/user", userRoute);

// server
app.listen(SERVER_PORT, () => {
  logger.info(`Server running on port ${SERVER_PORT}`);
  connectMssql();
  connectRedis();
  syncMssql();
});
