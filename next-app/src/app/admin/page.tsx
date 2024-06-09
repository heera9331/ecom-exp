import React from "react";
import Link from "next/link";

const page = ({ params, searchParams}:any) => {
    
    console.log(params);
    console.log(searchParams);


    return (
        <div className="grid grid-cols-12 min-h-[100vh]">
            <div className="col-span-2 bg-gray-900 p-4 min-h-full">
                <ul className="flex flex-col text-white font-semibold text-md min-h-[20vh]">
                    <li className="border-b border-b-gray-200/20"><Link className="" href={'/admin/dashboard'}>Dashboard</Link></li>
                    <li className="border-b border-b-gray-200/20"><Link className="" href={'/admin/customization'}>Customization</Link></li>
                    <li className="border-b border-b-gray-200/20"><Link className="" href={'/admin/pages'}>Pages</Link></li>
                    <li className="border-b border-b-gray-200/20"><Link className="" href={'/admin/products'}>Products</Link></li>
                    <li className="border-b border-b-gray-200/20"><Link className="" href={'/admin/settings'}>Settings</Link></li>
                </ul>
            </div>
            <div className="col-span-10"></div>
        </div>
    );    
}

export default page;