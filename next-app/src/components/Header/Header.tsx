"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    const navigate = useRouter();

    return (
        <header className="flex items-center justify-between bg-gray-100 p-2 border-b border-black border-opacity-25 rounded-sm">
            <h1 className="text-3xl font-semibold">Logo</h1>
            <input
                type="search"
                placeholder="Search here..."
                className="py-1 px-2 border border-black border-opacity-25 rounded-sm "
            />
            <ul className="flex items-center justify-center gap-3 font-semibold">
                <li>
                    <Link href={'/'} className="bg-white px-2 py-1  border border-black border-opacity-25 rounded-sm">Home</Link>
                </li>
                <li>
                    <Link href={'/contact'} className="bg-white px-2 py-1  border border-black border-opacity-25 rounded-sm">Contact us</Link>
                </li>
                <li>
                    <Link href={'/about'} className="bg-white px-2 py-1  border border-black border-opacity-25 rounded-sm">About us</Link>
                </li>
                <li>
                    <Link
                        href={'#'}
                        className="bg-white px-2 py-1  border border-black border-opacity-25 rounded-sm"
                        onClick={() => {
                            // clear localstorage
                            navigate.push('/');
                        }}
                    >Logout</Link>
                </li>
            </ul>
        </header >
    );
};

export default Header;