import mongoose from "mongoose";
import "dotenv/config";

//Connection to the database
export async function connectMongoDB() {
  try {
    //https://stackoverflow.com/questions/65296563/type-undefined-is-not-assignable-to-type-string-string
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Fail to connect: ", error);
  }
}
