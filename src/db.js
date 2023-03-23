import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

export const tryConnection = async () => {
  try {
    // Connect to the MongoDB cluster
    connect(MONGODB_URI);
    console.log("database connection established.");
  } catch (e) {
    console.log("could not connect to the database.", e);
  }
};
