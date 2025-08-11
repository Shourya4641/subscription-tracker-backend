import mongoose from "mongoose";
import { NODE_ENV, MONGO_DB_URI } from "../config/env.js";

if (!MONGO_DB_URI) {
  throw new Error(
    "Define MongoDB URI as env variable in the .env.<production/development>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log(`Database connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.log(`Error connecting to the database ${error}`);
    process.exit(1);
  }
};

export default connectToDatabase;
