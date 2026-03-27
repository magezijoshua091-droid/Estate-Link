"use client";

import { useRouter } from 'next/navigation';
import Dashboard from '../../views/Dashboard';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f7fe] text-gray-900 font-sans">
      <Dashboard onNavigateHome={() => router.push('/')} />
    </div>
  );
}
