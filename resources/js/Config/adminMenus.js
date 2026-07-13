export const adminMenus = [
    {
        label: 'Dashboard',
        href: '/dashboard',
    },

    {
        label: 'User Management',
        children: [
            {
                label: 'Users',
                href: '/users',
                permission:'user.view',
            },
            {
                label: 'Roles',
                href: '/roles',
                permission: 'role.view',
            },
            {
                label: 'Permissions',
                href: '/permissions',
                permission:'permission.view',
            },
        ],
    },

    {
        label: 'System',
        children: [
            {
                label: 'Activity Logs',
                href: '/activity-logs',
                permission:'activity-logs.view',
            },
        ],
    },
];
