"use client"

import Link from "next/link";

export default function Page(props:any) {

    const links = [
        { path: "/", title: "Main Page" },
        { path: "/home", title: "Home Page" },
        { path: "/login", title: "Login" },
        { path: "/contact", title: "Contact us" },
        { path: "/about", title: "About us" },
        { path: "/sitemap", title: "SiteMap" },
        { path: "/logout", title: "Logout" }
    ]

    return (
        <div className="px-2 ">
            <h1 className="font-semibold text-2xl ">SiteMap</h1>

            <div className="md:flex md:gap-4">
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="font-semibold">Normal Routes</h3>
                    {links.map((link, idx) => {
                        return <Link
                            key={idx}
                            href={link.path}
                            className="text-blue-800 underline font-semibold"
                        >
                            {link.title} - {link.path}
                        </Link>
                    })}
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="font-semibold">Usefull for Seller</h3>
                    <Link
                        href={'/seller'}
                        className="text-blue-800 underline font-semibold"
                    >
                        Seller Home
                    </Link>

                    <Link
                        href={`/seller/login`}
                        className="text-blue-800 underline font-semibold"
                    >
                        Login - /seller/login
                    </Link>
                    <Link
                        href={`/seller/register`}
                        className="text-blue-800 underline font-semibold"
                    >
                        Register - /seller/register
                    </Link>

                    <Link
                        href={`/seller/add-product`}
                        className="text-blue-800 underline font-semibold"
                    >
                        Add Product - /seller/add-product
                    </Link>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="font-semibold">User</h3>
                    <Link
                        href={'/cart'}
                        className="text-blue-800 underline font-semibold"
                    >
                        Cart
                    </Link>
                </div>
            </div>



        </div>
    )
}