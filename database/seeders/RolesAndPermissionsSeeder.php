<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        $permissions = [
            // Project
            'user.create',
            'user.view',
            'user.update',
            'user.delete',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        $super_admin = Role::firstOrCreate(['name'=>'Super Admin', 'guard_name'=>'web']);

        $admin = Role::firstOrCreate(['name'=>'Admin', 'guard_name'=>'web']);
        $admin->syncPermissions(Permission::whereIn('name', [
            'user.create',
            'user.view',
            'user.update',
            'user.delete',
        ])->get());

        $user = Role::firstOrCreate(['name'=>'User', 'guard_name'=>'web']);

        
    }
}
