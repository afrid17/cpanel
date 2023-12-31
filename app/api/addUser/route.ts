import connectMongoDb from "@/libs/dataBase/mongoDb";
import userModel from "@/libs/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDb();
    userModel.create(await req.json())
    console.log("success")
    return NextResponse.json({ message: "success" });
    
  } catch (e) {
    console.log(e)
    return NextResponse.json({ message: "unknownError" });
    
  }
}