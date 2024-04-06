import { Cart } from "@/app/api/models";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils"

export const GET = async (req: NextRequest, { params: { id } }: { params:{id:string} }) => {
    await connectDB();
    let customerId = id;
    if (!customerId) {
        return NextResponse.json({ error: "customer id is not found" });
    }
    try {
        let user = await Cart.findOne({ customerId: customerId });
        return NextResponse.json(user);
    } catch (eror) {
        return NextResponse.json({error: "database error"});
    }

}

export const PUT = async (req: NextRequest, { params: { id } }: { params:{id:string} }) => {
    await connectDB();
    let customerId = id;
    const body = await req.json()
    const {newQuantity,productId} = body
    // console.log(newQuantity,productId," from add to cart api")
    if (!customerId) {
        return NextResponse.json({ error: "customer id is not found" });
    }
    try {
        let user = await Cart.findOneAndUpdate({ customerId: customerId , "products.productId":productId },
                                                {$set:{"products.$.quantity":newQuantity}},{new:true,upsert:true});
        return NextResponse.json(user);
    } catch (error:any) {
        return NextResponse.json({error: "database error",msg:error.message});
    }
}
export const POST = async (req: NextRequest, { params: { id } }: { params:{id:string} }) => {
    await connectDB();
    let customerId = id;
    const body = await req.json()
    const {productId} = body

    const newCart = {
        customerId,
        products:[{productId}]
    }
    if (!customerId) {
        return NextResponse.json({ error: "customer id is not found" });
    }
    try {

        //  checking if userAlready Exist or not if exist than no need to create new row just add into previous array
        const updatedCart = await Cart.findOneAndUpdate(
            { customerId: customerId },
            { $push: { products: { productId } } },
            { new: true, upsert: true } // Use `upsert: true` to create a new cart if it doesn't exist
        )

        if(updatedCart){
            // console.log(ifExist)
            // console.log(ifExist.products);
            return NextResponse.json({products:updatedCart.products})
        }
        // let user = await Cart.create(newCart);
        // return NextResponse.json(user);
    } catch (error:any) {
        return NextResponse.json({error: "database error",msg:error.message});
    }
}
