import React from 'react';
import { Link } from 'react-router-dom';


const General = () => {

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
        },
        {
          name: "Notification",
          description: "Set your email notification preferences",
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
          current: true,
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
          description: "Visible of shopping activity on stream",
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
          description: "All your block users",
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

    return (

        <div>

        <div className="max-w-6xl p-4">
            <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-64 shrink-0">
                <div className="rounded-md shadow-sm">
                    <div className="p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Profile Setting</h2>
                    </div>
                    <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">Account Setting</h2>
                    </div>
                    <nav className="space-y-1 p-2">
                    {sidebarItems.map((item) => (
                        <Link
                        key={item.name}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-md"
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
                
                <div className="rounded-md">
        <div className="space-y-6 p-6">
          {/* Header */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Email & Password</h1>
            <p className="text-sm text-gray-600">Update your email and or password</p>
          </div>

          <form className="space-y-6">
            {/* Current Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-900">
                Current Password
                <span className="text-gray-500 font-normal">
                  {" "}
                  (required to update email or change current password)
                </span>
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Enter your current password"
              />
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Lost your password?
              </Link>
            </div>

            {/* Account Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-900">Account Email</label>
              <input
                type="email"
                defaultValue="info@example.com"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-600"
              />
            </div>

            {/* Password Generation Notice */}
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-600">Click on the "Generate Password" button to change your password</p>
            </div>

            {/* Generate Password Button */}
            <button
              type="button"
              className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Generate password
            </button>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t">
              <button type="button" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 rounded-full" style={{border: "1px solid #142d6f"}}>
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default General;