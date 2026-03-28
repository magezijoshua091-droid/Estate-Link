"use client";

import { useRouter } from 'next/navigation';
import Dashboard from '../../views/Dashboard';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f7fe] dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      <Dashboard onNavigateHome={() => router.push('/')} />
    </div>
  );
}
