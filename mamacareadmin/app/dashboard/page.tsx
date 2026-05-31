import Header from "@/components/layout/Header";
import StatCard from "@/components/dashboard/StatCard";
import RecentUsersTable from "@/components/dashboard/RecentUsersTable";
import { mockData } from "@/lib/mockData";
import { Users, Baby, Calendar, Bell, Users2 } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Users", value: mockData.stats.totalUsers, icon: Users, change: "112.3%" },
    { label: "Active Pregnancies", value: mockData.stats.activePregnancies, icon: Baby, change: "118.3%" },
    { label: "Appointments", value: mockData.stats.appointments, icon: Calendar, change: "1.8%" },
    { label: "Reminders Sent", value: mockData.stats.remindersSent, icon: Bell, change: "119.2%" },
    { label: "Community Posts", value: mockData.stats.communityPosts, icon: Users2, change: "19.1%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        {/* Sidebar - We'll make this a component next */}
        <aside className="w-64 hidden md:block border-r bg-white h-[calc(100vh-73px)] p-6">
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-pink-50 text-pink-600 rounded-xl font-medium">
              <Users className="h-5 w-5" /> Dashboard
            </a>
            {/* Add more links later */}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-8">
          <div>
            <h1 className="text-3xl font-semibold">Welcome back, Waju!</h1>
            <p className="text-gray-600">Here is what is happening with MamaCare.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          {/* Charts + Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Charts go here (can be separate components too) */}
            <RecentUsersTable />
          </div>
        </main>
      </div>
    </div>
  );
}