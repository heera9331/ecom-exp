import { NextRequest, NextResponse } from "next/server";
import { Product, User } from "@/app/api/models";
import { connectDB } from "@/utils"

connectDB();


export const POST = async (req: NextRequest, res: NextResponse) => {
    req = await req.json();
    console.log(req)
    let user: { email: String, password: String } = req.user;

    console.log(user);

    if (!user) {
        return NextResponse.json({ error: "user not found" })
    }
    let tmpUser = await User.findOne({ email: user.email, password: user.password }).select('-password');

    return NextResponse.json({ user: tmpUser });
}