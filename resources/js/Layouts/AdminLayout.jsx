import Sidebar from '@/Components/Admin/Sidebar';
import Topbar from '@/Components/Admin/Topbar';

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Topbar />

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}