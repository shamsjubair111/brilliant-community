import React, { useState } from 'react';
import { Mail } from "lucide-react"

const NewsLetter = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Submitted email:", email)
    setEmail("")

  }

    return (

        <div className="max-w-md mx-auto text-center">
      <div className="bg-white rounded-md p-6 shadow-sm">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Mail className="w-6 h-6 text-[#1a237e]" />
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Newsletter</h2>
        <p className="text-gray-500 text-sm mb-4">Get latest updates</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#1a237e] text-white rounded-lg hover:bg-[#151d69] transition-colors"
            >
              Subscribe
            </button>
          </div>

          <p className="text-gray-400 text-xs">No spam, just occasional product updates.</p>
        </form>
      </div>
    </div>

    );
};

export default NewsLetter;