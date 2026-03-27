"use client";

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Home, Users, Briefcase, Star, TrendingUp, ArrowRight, CheckCircle2, PlusSquare } from 'lucide-react';
import { getProperties, getProfessionals } from '../app/actions';

export default function LandingPage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [professionals, setProfessionals] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const props = await getProperties();
        const profs = await getProfessionals();
        if (props.length > 0) setProperties(props);
        if (profs.length > 0) setProfessionals(profs);
      } catch (e) {
        console.error(e);
      }
    }
    loadData();
  }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gray-900 flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 dark:to-gray-900"></div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            The All-In-One Real Estate<br/>& Construction Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
            Find Properties, Hire Pros, Manage Projects & Finance with Confidence
          </p>
          
          {/* Search Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col md:flex-row shadow-xl max-w-4xl mx-auto">
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 px-4 py-2">
              <span className="text-gray-700 dark:text-gray-200 font-medium w-full flex justify-between items-center cursor-pointer">
                Buy <ChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 px-4 py-2">
              <span className="text-gray-700 dark:text-gray-200 font-medium w-full flex justify-between items-center cursor-pointer">
                Rent Pros <ChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 px-4 py-2">
              <span className="text-gray-700 dark:text-gray-200 font-medium w-full flex justify-between items-center cursor-pointer">
                Find Pros <ChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <div className="flex-1 flex items-center px-4 py-2">
              <span className="text-gray-700 dark:text-gray-200 font-medium w-full flex justify-between items-center cursor-pointer">
                Min. Price - Max. Price <ChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors mt-2 md:mt-0 md:ml-2">
              Search
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-2.5 rounded-md font-medium flex items-center shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm">
              <Home className="h-4 w-4 mr-2 text-gray-700 dark:text-gray-300" /> List Your Property
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-2.5 rounded-md font-medium flex items-center shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm">
              <Users className="h-4 w-4 mr-2 text-gray-700 dark:text-gray-300" /> Hire a Professional
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-2.5 rounded-md font-medium flex items-center shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm">
              <Briefcase className="h-4 w-4 mr-2 text-gray-700 dark:text-gray-300" /> Post a Job
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Listings */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Listings</h2>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Listing 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Villa" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Modern Villa in Cape Town</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">$450,000</span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Verified
                  </span>
                </div>
              </div>
            </div>
            
            {/* Listing 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Apartment" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Luxury Apartment in Nairobi</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">$1,200<span className="text-sm font-normal text-gray-500 dark:text-gray-400"> / month</span></span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Listing 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="House" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Beachfront House in Lagos</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">$350,000</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded flex items-center">
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Professionals & Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Professionals Near You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pro 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah K." className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Sarah K.</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Interior Designer</p>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded font-medium flex items-center">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-sm font-medium ml-2 text-gray-700 dark:text-gray-300">4.8</span>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Hire Pro
                  </button>
                </div>
              </div>

              {/* Pro 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
                <img src="https://i.pravatar.cc/150?u=james" alt="James B." className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">James B.</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">General Contractor</p>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded font-medium flex items-center">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Verified Pro
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                    </div>
                    <span className="text-sm font-medium ml-2 text-gray-700 dark:text-gray-300">4.9</span>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Hire Pro
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="bg-[#1a365d] rounded-t-xl p-4 flex items-center text-white">
              <div className="bg-white/20 rounded-full p-1 mr-3">
                <PlusSquare className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Market Insights</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-b-xl p-5 shadow-sm border border-t-0 border-gray-100 dark:border-gray-700">
              <div className="mb-4 flex items-start">
                <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Property Trends</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Avg. Home Price <span className="text-green-500 font-semibold ml-1">$430,000 ↑ 3%</span></p>
                </div>
              </div>
              
              <hr className="my-4 border-gray-100 dark:border-gray-700" />
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center mr-3 shrink-0">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white flex-1">New Listings This Week</p>
                <span className="font-bold text-gray-900 dark:text-white">120</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between mb-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
          <div className="flex items-center justify-center space-x-3 px-6 py-3 md:py-0 w-full md:w-auto">
            <Briefcase className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold text-gray-900 dark:text-white">Get Financing:</span> Calculate Loans & Mortgages</p>
          </div>
          <div className="flex items-center justify-center space-x-3 px-6 py-3 md:py-0 w-full md:w-auto">
            <Users className="h-5 w-5 text-blue-600" />
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Trusted by Thousands of Users</p>
          </div>
          <div className="flex items-center justify-center space-x-2 px-6 py-3 md:py-0 w-full md:w-auto">
            <div className="flex text-yellow-400">
              <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
            </div>
            <div className="flex space-x-1 ml-2 text-gray-400">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src="https://i.pravatar.cc/150?u=michael" alt="Michael T." className="w-12 h-12 rounded-full" />
            <div>
              <p className="italic text-gray-800 dark:text-gray-200 font-medium">"The platform made buying my home so easy!"</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Michael T.</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold text-blue-600">Zillow</span>
            <span className="text-2xl font-bold text-orange-500 flex items-center"><Briefcase className="h-6 w-6 mr-1"/> Procore</span>
            <span className="text-2xl font-bold text-green-600 flex items-center"><Home className="h-6 w-6 mr-1"/> houzz</span>
          </div>
        </div>

      </div>
    </div>
  );
}
