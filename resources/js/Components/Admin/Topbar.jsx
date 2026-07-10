import { usePage } from '@inertiajs/react';

export default function Topbar() {
    const { auth } = usePage().props;

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
            <h2 className="font-semibold text-lg">
                Admin Panel
            </h2>

            <div>
                {auth?.user?.name}
            </div>
        </header>
    );
}