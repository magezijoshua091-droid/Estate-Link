import { Home, Briefcase, PlusSquare, DollarSign, Settings, MoreHorizontal, MapPin, TrendingUp, ChevronDown, Users, Star } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 450 },
  { name: 'Fri', value: 600 },
  { name: 'Sat', value: 700 },
  { name: 'Sun', value: 650 },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          Welcome Back, Sarah! <span className="ml-2 text-2xl">👋</span>
        </h1>
      </div>

      {/* Stats Row */}
      <div className="bg-blue-900 dark:bg-blue-950 rounded-xl p-6 mb-8 text-white flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 shadow-lg">
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold">3</span>
          <div className="flex flex-col">
            <span className="text-blue-200 font-medium">Saved Properties</span>
            <Home className="h-5 w-5 text-blue-400 opacity-50 mt-1" />
          </div>
        </div>
        <div className="hidden md:block w-px h-12 bg-blue-800"></div>
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold">5</span>
          <div className="flex flex-col">
            <span className="text-blue-200 font-medium">Active Projects</span>
            <Briefcase className="h-5 w-5 text-blue-400 opacity-50 mt-1" />
          </div>
        </div>
        <div className="hidden md:block w-px h-12 bg-blue-800"></div>
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold">2</span>
          <div className="flex flex-col">
            <span className="text-blue-200 font-medium">New Leads</span>
            <Users className="h-5 w-5 text-blue-400 opacity-50 mt-1" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Quick Actions</h2>
          <div className="flex space-x-2 text-gray-400">
            <Settings className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
            <MoreHorizontal className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <PlusSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">New Property Listing</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hire a Pro</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <Briefcase className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Post a Job</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Get Financing</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (My Properties & Insights) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* My Properties */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">My Properties</h2>
              <div className="flex space-x-2 text-gray-400">
                <Settings className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                <MoreHorizontal className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Property 1 */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1600607687931-cecebd80d6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Penthouse" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Penthouse in Nairobi</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mb-3">
                    <MapPin className="h-3 w-3 mr-1" /> Westlands, Nairobi
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">$850,000</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
                      Edit Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Property 2 */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Villa" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Villa in Kampala</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mb-3">
                    <MapPin className="h-3 w-3 mr-1" /> Kololo, Kampala
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">$240,000</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
                      Edit Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights & Analytics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Insights & Analytics</h2>
              <div className="flex space-x-2 text-gray-400">
                <Settings className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                <MoreHorizontal className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Weekly Market Trends</h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ color: '#2563eb', fontWeight: 'bold' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={{r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Budget Overview</h3>
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex space-x-8 ml-8">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Spent</p>
                    <p className="font-bold text-gray-900 dark:text-white">$15,200</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Remaining</p>
                    <p className="font-bold text-gray-900 dark:text-white">$8,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Jobs & Pros) */}
        <div className="space-y-8">
          
          {/* Job Opportunities */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Job Opportunities</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded mr-3">
                    <Briefcase className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Architect Needed</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Office Renovation</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-start">
                  <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded mr-3">
                    <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Construction Foreman</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hotel Build</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center">
              View All Jobs <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>

          {/* Recommended Pros */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recommended Pros</h2>
              <div className="flex space-x-2 text-gray-400">
                <Settings className="h-4 w-4 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                <MoreHorizontal className="h-4 w-4 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <img src="https://i.pravatar.cc/150?u=anna" alt="Anna M." className="w-10 h-10 rounded-full object-cover mr-3" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Anna M.</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Interior Designer</p>
                </div>
                <div className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  4.8 <Star className="h-3 w-3 text-yellow-400 fill-current ml-1" />
                </div>
              </div>

              <div className="flex items-center">
                <img src="https://i.pravatar.cc/150?u=david" alt="David R." className="w-10 h-10 rounded-full object-cover mr-3" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">David R.</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">General Contractor</p>
                </div>
                <div className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  4.7 <Star className="h-3 w-3 text-yellow-400 fill-current ml-1" />
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center">
              View All <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
