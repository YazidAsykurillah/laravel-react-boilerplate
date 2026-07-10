import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen">
            <div className="p-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">
                    Laravel Boilerplate
                </h1>
            </div>

            <nav className="p-4 space-y-2">
                <Link
                    href="/dashboard"
                    className="block rounded px-4 py-2 hover:bg-slate-800"
                >
                    Dashboard
                </Link>

                <Link
                    href="#"
                    className="block rounded px-4 py-2 hover:bg-slate-800"
                >
                    Users
                </Link>

                <Link
                    href="#"
                    className="block rounded px-4 py-2 hover:bg-slate-800"
                >
                    Roles
                </Link>

                <Link
                    href="#"
                    className="block rounded px-4 py-2 hover:bg-slate-800"
                >
                    Permissions
                </Link>

                <Link
                    href="#"
                    className="block rounded px-4 py-2 hover:bg-slate-800"
                >
                    Activity Logs
                </Link>
            </nav>
        </aside>
    );
}