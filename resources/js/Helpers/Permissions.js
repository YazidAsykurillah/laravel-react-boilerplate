export const can = (permissions, permission) => {
    return permissions.includes(permission);
};

export const canAny = (permissions, requiredPermissions = []) => {
    return requiredPermissions.some(permission =>
        permissions.includes(permission)
    );
};

export const canAll = (permissions, requiredPermissions = []) => {
    return requiredPermissions.every(permission =>
        permissions.includes(permission)
    );
};