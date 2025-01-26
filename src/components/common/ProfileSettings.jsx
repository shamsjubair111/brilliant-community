import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSettings = () => {
    return (
       
        <div className="max-w-6xl p-8">
      <div className="flex gap-6">
        {/* Sidebar Navigation */}
        <div className="w-64 shrink-0">
          <div className="rounded-md shadow-sm">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">Profile Setting</h2>
            </div>
            <nav className="space-y-1 p-2">
              {[
                {
                  name: "Personal Info",
                  description: "About all your personal data",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  ),
                  current: true,
                },
                {
                  name: "Hobbies and Interest",
                  description: "Express yourself & share activities",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Social Network",
                  description: "Links to social media network",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Billing address",
                  description: "Manage payment related information",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href="#"
                  className="flex items-start gap-3 p-3 rounded-lg transition-colors "
                >
                  <div>{item.icon}</div>
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>


          {/* Account Settings */}
            
         <div className='shadow-sm rounded-md'><h2 className="text-lg font-semibold text-gray-900 p-4 mt-8">Account Setting</h2></div>

        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="rounded-lg">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-gray-900">Personal Information</h1>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Cancel</button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700">
                    Save changes
                  </button>
                </div>
              </div>
            </div>

            <form className="p-6 space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  defaultValue="Jessica CJ"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Everyone</option>
                  </select>
                </div>
              </div>

              {/* Gender Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Gender</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Who is allowed to see this field?</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Everyone</option>
                    <option>Only Me</option>
                    <option>My Friends</option>
                  </select>
                </div>
              </div>

              {/* Birthday Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Birthday</label>
                <div className="flex gap-4">
                  <select className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>12</option>
                  </select>
                  <select className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>01</option>
                  </select>
                  <select className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>1995</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>My Friends</option>
                  </select>
                  <button className="text-blue-600 hover:underline">Change</button>
                </div>
              </div>

              {/* Employment Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Employment</label>
                <input
                  type="text"
                  defaultValue="UI/UX Designer"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Everyone</option>
                  </select>
                  <button className="text-blue-600 hover:underline">Change</button>
                </div>
              </div>

              {/* Location Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Location</label>
                <input
                  type="text"
                  defaultValue="10 Mills Street, Albion dc, Queensland 4010, Australia"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Everyone</option>
                  </select>
                  <button className="text-blue-600 hover:underline">Change</button>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  defaultValue="info@example.com"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Everyone</option>
                  </select>
                  <button className="text-blue-600 hover:underline">Change</button>
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Phone</label>
                <input
                  type="tel"
                  defaultValue="0125 2546 2456"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Only Me</option>
                  </select>
                </div>
              </div>

              {/* Biography Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Biography</label>
                <div className="border rounded-lg">
                  <div className="border-b p-2 flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </button>
                    {/* Add more rich text editor buttons here */}
                  </div>
                  <textarea rows={4} className="w-full p-3 focus:ring-0 border-0 focus:outline-none"></textarea>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Everyone</option>
                  </select>
                </div>
              </div>

              {/* Website Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Website</label>
                <input
                  type="url"
                  defaultValue="https://www.portfolio.com/"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>This field can be seen by:</span>
                  <select className="text-xs border-0 bg-transparent text-blue-600">
                    <option>Only Me</option>
                  </select>
                </div>
              </div>

              <div className="p-6 border-b">
              <div className="flex items-center justify-end" style={{position:"relative", left: "25px"}}>
               
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Cancel</button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700">
                    Save changes
                  </button>
                </div>
              </div>
            </div>

            </form>
          </div>
        </div>
      </div>
    </div>

    );
};

export default ProfileSettings;