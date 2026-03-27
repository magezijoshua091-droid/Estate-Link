import React from 'react';
import { 
  Home, User, FileText, Settings, Wallet, Bell, 
  Search, MessageCircle, ChevronDown, ChevronRight, 
  Target, PlusSquare, ListTodo, Calendar, MoreHorizontal,
  Grid, Building, Eye, FolderPlus, Briefcase, UserPlus,
  MessageSquare
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Slop', value: 2000 },
  { name: 'Today', value: 3500 },
  { name: 'Neet', value: 2800 },
  { name: 'Bow', value: 4500 },
  { name: 'Today', value: 5200 },
];

export default function Dashboard({ onNavigateHome }: { onNavigateHome?: () => void }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f7fe] font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e3a5f] text-white flex flex-col relative overflow-hidden shrink-0">
        {/* Logo */}
        <div className="p-6 flex items-center cursor-pointer z-10" onClick={onNavigateHome}>
          <div className="bg-white/20 p-1.5 rounded-lg mr-3">
            <Building className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">PropNexus</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 z-10 mt-4">
          <a href="#" className="flex items-center px-4 py-3 bg-white/10 rounded-lg text-white font-medium">
            <Home className="h-5 w-5 mr-4 text-blue-300" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg hover:text-white transition-colors">
            <User className="h-5 w-5 mr-4" />
            Properties
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg hover:text-white transition-colors">
            <FileText className="h-5 w-5 mr-4" />
            Projects
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg hover:text-white transition-colors">
            <Settings className="h-5 w-5 mr-4" />
            Vendors
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg hover:text-white transition-colors">
            <Wallet className="h-5 w-5 mr-4" />
            Wallet
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg hover:text-white transition-colors relative">
            <Bell className="h-5 w-5 mr-4" />
            Notifications
            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
          </a>
        </nav>

        {/* City Skyline Background */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-64 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1e3a5f] to-transparent pointer-events-none"></div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, Mark</h1>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 relative">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
              <span className="text-sm font-medium text-gray-700">Notifications</span>
              <img src="https://i.pravatar.cc/150?u=mark" alt="Mark" className="w-9 h-9 rounded-full object-cover border-2 border-gray-100" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Active Deals */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center">
                <div className="bg-[#2c4c7c] p-3 rounded-lg mr-4">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Active Deals</p>
                  <p className="text-2xl font-bold text-[#1e3a5f]">6</p>
                </div>
              </div>

              {/* New Leads */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">New Leads</p>
                  <p className="text-2xl font-bold text-[#1e3a5f]">12</p>
                </div>
              </div>

              {/* Wallet Balance */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <PlusSquare className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Wallet Balance</p>
                  <p className="text-2xl font-bold text-[#1e3a5f]">$24,750</p>
                </div>
              </div>

              {/* Tasks Due */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <ListTodo className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Tasks Due</p>
                  <p className="text-2xl font-bold text-red-500">3</p>
                </div>
              </div>

              {/* Notifications Dropdown */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Bell className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Notifications</span>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* My Projects */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">My Projects</h2>
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Project 1 */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="h-32 bg-gray-200 relative">
                      <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Greenwood Tower" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#1e3a5f] text-sm mb-3">Greenwood Tower</h3>
                      <div className="flex justify-between items-center">
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-semibold">70% <span className="font-normal text-gray-600 ml-1">Complete</span></span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="h-32 bg-gray-200 relative">
                      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Riverside Complex" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#1e3a5f] text-sm mb-3">Riverside Complex</h3>
                      <div className="flex justify-between items-center">
                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-semibold">2/6 <span className="font-normal text-gray-600 ml-1">Upcoming Meeting</span></span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Analytics Overview */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-[#1e3a5f]">Analytics Overview</h2>
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </div>
                
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-3xl font-bold text-[#1e3a5f]">5.2K</span>
                    <span className="text-sm text-gray-500 ml-2">This Week</span>
                  </div>
                  <button className="flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md font-medium">
                    <Calendar className="h-4 w-4 mr-2" /> Month <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>

                <div className="flex-1 min-h-[180px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                      <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        dot={{r: 4, fill: '#fff', strokeWidth: 2, stroke: '#3b82f6'}} 
                        activeDot={{r: 6, fill: '#3b82f6'}} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column (Recent & Actions) */}
              <div className="space-y-6">
                
                {/* Recent */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <span className="font-bold text-[#1e3a5f] flex items-center">
                        Recent <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-gray-400' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm relative">
                    <div className="h-48 bg-gray-200 relative">
                      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Riverside Complex" className="w-full h-full object-cover" />
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg flex flex-col items-center min-w-[200px]">
                        <div className="flex items-center text-orange-500 font-bold mb-2">
                          <span className="mr-2">fDa</span> In Progress
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex justify-between items-center bg-white">
                      <h3 className="font-bold text-[#1e3a5f] text-lg">Riverside Complex</h3>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Grid className="h-5 w-5" />
                        <Building className="h-5 w-5" />
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                          <Eye className="h-4 w-4 mr-1" />
                          <span className="text-xs">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex space-x-4">
                  <button className="flex-1 bg-[#2c4c7c] hover:bg-[#1e3a5f] text-white py-3 rounded-lg flex items-center justify-center font-medium transition-colors text-sm">
                    <FolderPlus className="h-4 w-4 mr-2" /> Add Property
                  </button>
                  <button className="flex-1 bg-[#2e8b57] hover:bg-[#236b43] text-white py-3 rounded-lg flex items-center justify-center font-medium transition-colors text-sm">
                    <Briefcase className="h-4 w-4 mr-2" /> Create Project
                  </button>
                  <button className="flex-1 bg-[#f08a3d] hover:bg-[#d9772b] text-white py-3 rounded-lg flex items-center justify-center font-medium transition-colors text-sm">
                    <UserPlus className="h-4 w-4 mr-2" /> Invite Vendor
                  </button>
                </div>

              </div>

              {/* Right Column (Insights & Notifications) */}
              <div className="space-y-6">
                
                {/* Daily Insights */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-[#1e3a5f]">Daily Insights</h2>
                    <MoreHorizontal className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></div>
                      <p className="text-sm text-gray-700">Construction Costs Rising 3% This Month</p>
                    </li>
                    <li className="border-t border-gray-100 pt-4 flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></div>
                      <p className="text-sm text-gray-700">Top Investment Areas in 2024</p>
                    </li>
                  </ul>
                  
                  <div className="flex justify-end">
                    <button className="bg-[#2c4c7c] hover:bg-[#1e3a5f] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Recent Notifications */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-[#1e3a5f]">Recent Notifications</h2>
                    <MoreHorizontal className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="space-y-4">
                    {/* Notification 1 */}
                    <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                      <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=ana" alt="Ana" className="w-8 h-8 rounded-full mr-3" />
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">New Lead:</span> Ana Smith - <span className="text-gray-400 text-xs">10 mins ago</span>
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Notification 2 */}
                    <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                      <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=pay" alt="Pay" className="w-8 h-8 rounded-full mr-3" />
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Payment Received:</span> $5,200 - <span className="text-gray-400 text-xs">1 hr ago</span>
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Notification 3 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-red-400 p-1.5 rounded-md mr-3">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Milestone Update</span> Project Milestone Completed - <span className="text-gray-400 text-xs">2 hrs ago</span>
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
