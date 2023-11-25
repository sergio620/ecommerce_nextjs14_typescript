import "dotenv/config";
import { NextRequest, NextResponse } from "next/server";
import { Shoe } from "@/app/lib/model/shoe";
import { connectMongoDB } from "@/app/lib/connectMongoDB";

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams);

  connectMongoDB();
  const products = await Shoe.find({});
  return NextResponse.json(products);
}
