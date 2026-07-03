<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\PermissionRegistrar;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $super_admin = User::firstOrCreate(
            ['email' => env('SUPER_ADMIN_EMAIL', 'superadmin@larareact.local')],
            [
                'name'              => 'Super Admin',
                'password'          => Hash::make(env('SUPER_ADMIN_PASSWORD', 'password')),
                'email_verified_at' => now(),
            ]
        );
        $super_admin->assignRole('Super Admin');


        $admin = User::firstOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@larareact.local')],
            [
                'name'              => 'Admin',
                'password'          => Hash::make(env('ADMIN_PASSWORD', 'password')),
                'email_verified_at' => now(),
            ]
        );
        $admin->assignRole('Admin');
    }
}
