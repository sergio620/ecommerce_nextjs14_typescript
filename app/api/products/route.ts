import "dotenv/config";
import { NextRequest, NextResponse } from "next/server";
import { Shoe } from "@/app/lib/model/shoe";
import { connectMongoDB } from "@/app/lib/connectMongoDB";
import { SearchParams } from "@/app/lib/definitions";

function prepareData(params: SearchParams) {
  //https://blog.logrocket.com/how-to-dynamically-assign-properties-object-typescript/#solution-2-use-object-index-signature
  let key: keyof SearchParams;
  const query: Record<string, any> = {};
  for (key in params) {
    //https://stackoverflow.com/questions/71573222/how-to-make-mongoose-query-case-insensitive
    if (key === "price") {
      query["newPrice"] = { $regex: params[key], $options: "i" };
    } else {
      query[key] = { $regex: params[key], $options: "i" };
    }
  }

  return query;
}
export async function GET(request: NextRequest) {
  console.log("request.nextUrl.searchParams: ", request.nextUrl.searchParams);
  console.log("request.nextUrl.search: ", request.nextUrl.search);
  //https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object#answer-50147341
  const params: SearchParams = Object.fromEntries(
    new URLSearchParams(request.nextUrl.searchParams.toString())
  );
  console.log("params before validate: ", params);
  const query = prepareData(params);
  console.log("params after validate: ", query);

  await connectMongoDB();
  //https://nextjs.org/learn/dashboard-app/mutating-data#4-validate-and-prepare-the-data
  const products = await Shoe.find(query);
  console.log("products: ", products);

  return NextResponse.json(products);
}
