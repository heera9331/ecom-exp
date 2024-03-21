import { NextRequest, NextResponse } from "next/server";
import { Product } from "../../models";

export async function GET(req: NextRequest, { params }: { params: { id: string } }, res: NextResponse){

    const {id}= params
   

    try {
        const result = await Product.findOne({_id:id})

        if (result){
            return  Response.json({status:true , msg:"Successfully Found",result})
        }
        return  Response.json({status:false , msg:"Not Found",result})

    } catch (error) {
        return Response.json({msg:"Some Error Occured"})
    }
}


export async function PUT(req:NextRequest, { params }: { params: { id: string } }, res:NextResponse){

    const {id}= params
    const body = await req.json()
    const {updatedProduct} = body
  

    try {
        const updatedResult = await Product.findByIdAndUpdate(id,updatedProduct,{new:true})

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
