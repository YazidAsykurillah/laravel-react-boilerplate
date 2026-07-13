import { Link, usePage } from '@inertiajs/react';
import { adminMenus } from '@/Config/adminMenus';

export default function Sidebar() {
    const { url, props } = usePage();
    const permissions = props.auth?.user?.permissions ?? [];
    console.log(permissions);

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen">
            <div className="h-16 px-6 border-b border-slate-700 flex items-center">
                <h1 className="text-xl font-bold">
                    Laravel Boilerplate
                </h1>
            </div>

            <nav className="p-4 space-y-4">
                {adminMenus.map((menu) => (
                    <div key={menu.label}>
                        {menu.href ? (
                            <Link
                                href={menu.href}
                                className={`block rounded px-4 py-2 ${
                                    url.startsWith(menu.href)
                                        ? 'bg-blue-700 text-white'
                                        : 'text-gray-300 hover:bg-slate-800'
                                }`}
                            >
                                {menu.label}
                            </Link>
                        ) : (
                            <>
                                <div className="px-4 pt-4 pb-2 text-xs uppercase tracking-wider text-gray-500">
                                    {menu.label}
                                </div>

                                <div className="space-y-1">
                                    {menu.children?.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={`block rounded px-4 py-2 ${
                                                url.startsWith(child.href)
                                                    ? 'bg-blue-700 text-white'
                                                    : 'text-gray-300 hover:bg-slate-800'
                                            }`}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
}