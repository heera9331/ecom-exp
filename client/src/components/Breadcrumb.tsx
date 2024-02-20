"use client";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Breadcrumbs() {
    // Split the path into segments
    const path = useLocation();
    const segments = path.pathname.split('/').filter(segment => segment);

    return (
        <nav className=" py-2 px-4 border-b border-black border-opacity-25">
            <ol className="list-none flex">
                <li className="flex items-center">
                    <Link to="/">
                        <span className="font-semibold text-gray-500 px-1">/</span>
                    </Link>
                </li>
                {segments.map((segment, index) => (
                    <li key={index} className="flex items-center">
                        <Link to={`/${segments.slice(0, index + 1).join('/')}`}>
                            {segment}
                        </Link>
                        {index < segments.length - 1 && (
                            <span className="font-semibold text-gray-500 px-1">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}