import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Topbar() {
    const { auth } = usePage().props;
    console.log(auth);

    const [open, setOpen] = useState(false);

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
            <h2 className="font-semibold text-lg">
                Admin Panel
            </h2>

            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                    <span>{auth?.user?.name}</span>

                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>


                {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">

                        <Link
                            href="/profile"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Profile
                        </Link>

                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        >
                            Logout
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
