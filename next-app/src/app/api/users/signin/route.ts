import { NextRequest, NextResponse } from "next/server"
import { User } from "../../models"
import { connect } from "http2";
import { connectDB } from "@/utils";

connectDB()
export async function GET(req:NextRequest, res:NextResponse){

    
    // const body = await req.json()
    // const {userDetails} = body 

    const users = await User.find({})
    if (!users) {
        return Response.json({ error: "users not found" });
      }
    
      return Response.json({ users: users });
    
}