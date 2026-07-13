import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import PageHeader from '@/Components/Admin/PageHeader';

export default function Index() {
    return (
        <AdminLayout>
            <Head title="Permission" />
            <PageHeader title="Permissions" description='Permissions Management'/>
        </AdminLayout>
    );
}