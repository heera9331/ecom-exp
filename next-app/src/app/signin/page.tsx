"use client"

import { Button, Input} from "@/components";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";


function Page(props:any) {
    const [user, setUser] = useState({ email: "chauhanyogesh950@gmail.com", password: 'Yogesh@123' });
    const router = useRouter();
    const {data, status} = useSession()

    const handleLogin = async () => {
        console.log("From sign in page",user);

        console.log("Sign in running")
        await signIn("credentials",user)
    }
    
    useEffect(()=>{
        if (status==="authenticated"){
            router.push('/')
        }
        
    }, [status, router])

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-semibold">Login</h1>
            <div className="w-[400px] h-[300px] bg-gray-100 p-2 border border-black border-opacity-25 rounded-sm flex flex-col gap-2">
                {/* Content of the second div */}
                <Input
                    label="Email"
                    htmlFor="email"
                    placeholder="Enter email here..."
                    value={user.email}
                    type="text"
                    onChange={(e: any) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
                <Input
                    label="Password"
                    htmlFor="password"
                    placeholder="Enter password here..."
                    value={user.password}
                    type="password"
                    onChange={(e: any) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />

                <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-left">Dont have an account
                        <Link href={'register'} className="px-2 font-bold">
                            click
                        </Link>
                        to create? </p>
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
