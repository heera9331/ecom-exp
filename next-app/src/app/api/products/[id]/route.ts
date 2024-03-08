import { NextRequest, NextResponse } from "next/server";
import { Product } from "../../models";

// export const UPDATE = async (req: NextRequest, res: NextResponse) => {
//     req = await req.json();
//     let updated = req.product;
//     let id = req.id;

//     if (!product) {
//         return new NextResponse({ error: "product not found that will be update" });
//     }

//     if (!id) {
//         return new NextResponse({ error: "product id not found that will be update" });
//     }

//     let ack = await Product.updateOne({}, { updated })

//     if (ack) {
//         return new NextResponse({ ack });
//     }

//     return new NextResponse.json({ error: "database error" });
// }

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
