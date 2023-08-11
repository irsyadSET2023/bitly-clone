import { Sequelize } from "sequelize";
import config from "../../config";

const data = config.postgres;

const postgressConnection = new Sequelize(
  data.database,
  data.username,
  data.password,
  {
    host: data.host,
    port: data.port,
    dialect: "postgres",
    logging: config.nodeEnv === "development",
  }
);

export default postgressConnection;
