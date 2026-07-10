import {
    LayoutDashboard,
    Users,
    Shield,
    KeyRound,
    History,
} from "lucide-react";

export const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Users",
        href: "/users",
        icon: Users,
    },
    {
        name: "Roles",
        href: "/roles",
        icon: Shield,
    },
    {
        name: "Permissions",
        href: "/permissions",
        icon: KeyRound,
    },
    {
        name: "Activity Logs",
        href: "/activity-logs",
        icon: History,
    },
];