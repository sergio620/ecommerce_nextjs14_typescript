import mongoose from "mongoose";
import "dotenv/config";
import { NextResponse } from "next/server";
import User from "@/app/lib/model/user";
//Connection to the

export async function GET() {
  try {
    //https://stackoverflow.com/questions/65296563/type-undefined-is-not-assignable-to-type-string-string
    await mongoose.connect(process.env.MONGO_URI as string);
    const data = await User.find({});
    return NextResponse.json({ response: data });
  } catch (error) {
    return NextResponse.json({ "Fail to connect: ": error });
  }
}
