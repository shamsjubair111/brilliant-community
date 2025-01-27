import React from 'react';
import { Link } from 'react-router-dom';

const AccountSettings = () => {

    const sidebarItems = [
        {
          name: "Profile Visibility",
          description: "Select who may see your profile details",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ),
          current: true,
        },
        {
          name: "Notification",
          description: "Set important notification preferences",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          ),
        },
        {
          name: "Privacy and security",
          description: "Manage your account security",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
        },
        {
          name: "Shop",
          description: "View all shopping activity or stream",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          ),
        },
        {
          name: "Block List",
          description: "Manage block users",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          ),
        },
        {
          name: "Export Data",
          description: "All data associated with your account",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          ),
        },
      ]

      const visibilitySettings = {
        personal: [
          { label: "Name", value: "Everyone" },
          { label: "Date of Birth", value: "My Friends" },
          { label: "Gender", value: "Only Me" },
          { label: "Location", value: "Everyone" },
          { label: "Website", value: "Everyone" },
          { label: "Biography", value: "Everyone" },
        ],
        social: [
          { label: "Facebook", value: "Everyone" },
          { label: "X Twitter", value: "Everyone" },
          { label: "Behance", value: "Everyone" },
          { label: "YouTube", value: "Everyone" },
          { label: "Instagram", value: "All Members" },
        ],
        hobbies: [
          { label: "My Hobbies", value: "Everyone" },
          { label: "Favorite Music Bands/Artists", value: "My Friends" },
          { label: "Favorite TV Shows", value: "Only Me" },
          { label: "Favorite Books", value: "Only Me" },
          { label: "Favorite Movies", value: "Only Me" },
          { label: "Other Activities", value: "Everyone" },
        ],
      }


    return (
        
        <div className="max-w-6xl p-4">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-8">Profile Setting</h2>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">Account Setting</h2>
              </div>
              <nav className="space-y-1 p-2">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.name}
                   
                    className="flex items-start gap-3 p-3 rounded-lg transition-colors text-gray-600"
                    
                  >
                    <div className="text-gray-400">{item.icon}</div>
                    <div>
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold text-gray-900">Profile Visibility Settings</h1>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Cancel</button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
  
              <div className="p-6 space-y-8">
                {/* Personal Information Section */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-900 uppercase text-sm">Personal Information</h2>
                    <h3 className="font-medium text-gray-600 uppercase text-sm">Visibility</h3>
                  </div>
                  <div className="space-y-4">
                    {visibilitySettings.personal.map((setting) => (
                      <div key={setting.label} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{setting.label}</span>
                        <select className="text-sm border rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500">
                          <option>{setting.value}</option>
                          <option>Everyone</option>
                          <option>My Friends</option>
                          <option>Only Me</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </section>
  
                {/* Social Network Section */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-900 uppercase text-sm">Social Network</h2>
                    <h3 className="font-medium text-gray-600 uppercase text-sm">Visibility</h3>
                  </div>
                  <div className="space-y-4">
                    {visibilitySettings.social.map((setting) => (
                      <div key={setting.label} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{setting.label}</span>
                        <select className="text-sm border rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500">
                          <option>{setting.value}</option>
                          <option>Everyone</option>
                          <option>My Friends</option>
                          <option>Only Me</option>
                          <option>All Members</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </section>
  
                {/* Hobbies Section */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-900 uppercase text-sm">Hobbies and Interest</h2>
                    <h3 className="font-medium text-gray-600 uppercase text-sm">Visibility</h3>
                  </div>
                  <div className="space-y-4">
                    {visibilitySettings.hobbies.map((setting) => (
                      <div key={setting.label} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{setting.label}</span>
                        <select className="text-sm border rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500">
                          <option>{setting.value}</option>
                          <option>Everyone</option>
                          <option>My Friends</option>
                          <option>Only Me</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
  
              {/* Bottom Buttons */}
              <div className="p-6 border-t bg-gray-50 rounded-b-lg">
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Cancel</button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
};

export default AccountSettings;