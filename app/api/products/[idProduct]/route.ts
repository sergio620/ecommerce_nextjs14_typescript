import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/app/lib/connectMongoDB";
import { Shoe } from "@/app/lib/model/shoe";
import mongoose from "mongoose";

export async function GET(
  request: NextRequest,
  { params }: { params: { idProduct: string } }
) {
  const id = params.idProduct;
  await connectMongoDB();
  if (mongoose.Types.ObjectId.isValid(id)) {
    const response = await Shoe.findById({ _id: id });
    return NextResponse.json(response);
  } else {
    return NextResponse.json({ error: "No existe el producto" });
  }
}
