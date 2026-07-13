import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import PageHeader from '@/Components/Admin/PageHeader';

export default function Index() {
    return (
        <AdminLayout>
            <Head title="Users" />
            <PageHeader title="Users" description='Users Management'/>

        </AdminLayout>
    );
}