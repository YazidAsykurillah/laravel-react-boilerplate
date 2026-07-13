import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import PageHeader from '@/Components/Admin/PageHeader';

export default function Index() {
    return (
        <AdminLayout>
            <Head title="Activity Logs" />
            <PageHeader title="Activity Logs" description=''/>
        </AdminLayout>
    );
}