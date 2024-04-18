import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";
import { User } from "../models";
import { connectDB } from "@/utils";






export async function POST(req:NextRequest, res:NextResponse){

    await connectDB()
    const body = await req.json()
    const {userDetails} = body 
    

    try {
        const isCreated = await User.create(userDetails)
        // console.log("isCreated",isCreated)
        if (isCreated){
            return Response.json({status:true, msg:"Created Sucessfully", isCreated})
        }
        else{
            return Response.json({status:false, msg:"Creating could not done due to some error"})
        }
    } catch (error) {
        console.log(error)
        return Response.json({status:false, msg: "Some Error Occured During Creation",error})
    }
}
