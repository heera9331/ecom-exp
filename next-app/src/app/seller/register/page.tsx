"use client"
import { Button, Input } from "@/components";
import { FormEvent, useState } from "react";
import Link from "next/link";

function Page() {
    const [seller, setSeller] = useState({ email: "", password: "", gstNumber: "" });

    const handleLogin = () => {
        console.log(seller);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-semibold">Seller Registration</h1>
            <div className="w-[400px] h-[350px] bg-gray-100 p-2 border border-black border-opacity-25 rounded-sm flex flex-col gap-2">
                {/* Content of the second div */}
                <Input
                    label="Email"
                    htmlFor="email"
                    placeholder="Enter email here..."
                    value={seller.email}
                    type="text"
                    onChange={(e: any) => {
                        setSeller({ ...seller, email: e.target.value })
                    }}
                />
                <Input
                    label="Password"
                    htmlFor="password"
                    placeholder="Enter password here..."
                    value={seller.password}
                    type="text"
                    onChange={(e: any) => {
                        setSeller({ ...seller, password: e.target.value })
                    }}
                />
                <Input
                    label="GST Number"
                    htmlFor="gstNumber"
                    placeholder="Enter GST Number here..."
                    value={seller.gstNumber}
                    type="text"
                    onChange={(e: any) => {
                        setSeller({ ...seller, gstNumber: e.target.value })
                    }}
                />

                <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-left">Already have an accnout?
                        <Link href={'login'} className="px-2 font-bold">
                            click
                        </Link>
                        to login? </p>
                    <Button
                        text="Login"
                        onClick={(e: any) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
