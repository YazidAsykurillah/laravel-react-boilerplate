import PageHeader from '@/Components/Admin/PageHeader';
import StatCard from '@/Components/Admin/StatCard';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({stats}) {
    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div>
                <PageHeader 
                    title="Dashboard" 
                    description="Overview of system statistics" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <StatCard 
                        title="Users" 
                        value={stats.users} 
                    />

                    <StatCard 
                        title="Roles" 
                        value={stats.roles} 
                    />

                    <StatCard 
                        title="Permissions" 
                        value={stats.permissions} 
                    />

                    <StatCard 
                        title="Activity Logs" 
                        value={stats.activityLogs} 
                    />
                </div>
            </div>
        </AdminLayout>
    );
}