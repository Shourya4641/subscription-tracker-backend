import { config, configDotenv } from "dotenv";

configDotenv();

config({ path: `.env.${process.env.NODE_ENV}.local` });

export const { PORT, NODE_ENV, MONGO_DB_URI } = process.env;
