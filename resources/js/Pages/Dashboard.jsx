import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div>
                <h1 className="text-2xl font-bold mb-6">
                    Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500">
                            Users
                        </h3>

                        <p className="text-3xl font-bold">
                            0
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500">
                            Roles
                        </h3>

                        <p className="text-3xl font-bold">
                            0
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500">
                            Permissions
                        </h3>

                        <p className="text-3xl font-bold">
                            0
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500">
                            Activity Logs
                        </h3>

                        <p className="text-3xl font-bold">
                            0
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}