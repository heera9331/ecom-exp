
import { NextRequest, NextResponse } from "next/server";
import { Seller } from "../../models";
import { connectDB } from "@/utils";

connectDB()

export async function GET(req: NextRequest, { params }: { params: { id: string } }, res: NextResponse){

    const {id}= params
   
    
    const result = await Seller.findOne({_id:id})

    if (result){
        return  Response.json({status:true , msg:"Successfully Found",result})
    }

    return  Response.json({status:false, msg:"seller not exist"})


}
export async function PUT(req:NextRequest, { params }: { params: { id: string } }, res:NextResponse){
    
    const {id}= params
    const body = await req.json()
    const {updatedDetails} = body
    
    try {
        const updatedResult = await Seller.findByIdAndUpdate(id,updatedDetails,{new:true})

        if (updatedResult){
            return Response.json({status:true, msg:"Updated Sucessfully", updatedResult})
        }
        else{
            return Response.json({status:false, msg:"Updation could not done due to some error"})
        }
    } catch (error) {
        return Response.json({status:false, msg: "Some Error Occured During Updating"})
    }
}

export async function DELETE(req:NextRequest, { params }: { params: { id: string } }, res:NextResponse){
    
    const {id}= params
    try {
        const isDeleted = await Seller.deleteOne({_id:id})

        if (isDeleted){
            return Response.json({status:true, msg:"Updated Sucessfully", isDeleted})
        }
        else{
            return Response.json({status:false, msg:"Delete could not done due to some error"})
        }
    } catch (error) {
        return Response.json({status:false, msg: "Some Error Occured During Deleting"})
    }
}
