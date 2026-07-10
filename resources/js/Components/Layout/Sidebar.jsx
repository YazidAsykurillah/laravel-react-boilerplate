import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white">
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-xl font-bold">
                    Laravel Boilerplate
                </h1>
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <Link href="/dashboard">
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link href="/users">
                            Users
                        </Link>
                    </li>

                    <li>
                        <Link href="/roles">
                            Roles
                        </Link>
                    </li>

                    <li>
                        <Link href="/permissions">
                            Permissions
                        </Link>
                    </li>

                    <li>
                        <Link href="/activity-logs">
                            Activity Logs
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}