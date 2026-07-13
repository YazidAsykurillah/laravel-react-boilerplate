import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import PageHeader from '@/Components/Admin/PageHeader';

export default function Index() {
    return (
        <AdminLayout>
            <Head title="Roles" />
            <PageHeader title="Roles" description='Roles Management'/>
        </AdminLayout>
    );
}