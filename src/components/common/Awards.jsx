import React from 'react';
import userImage from "../../assets/images/user.jpg";

const Awards = () => {

    return (
        
        <div className="max-w-md mx-auto">
        
  
        {/* Awards Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Awards</span>
          </div>
  
          <div className="text-center">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-sm font-semibold text-gray-900 flex-1">BEST PERFORMERS</h3>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 8.999c0 1.902.765 3.627 2 4.89v4.111h2v-4.111c1.235-1.263 2-2.988 2-4.89 0-3.314-2.686-5.999-6-5.999v2c2.209 0 4 1.79 4 3.999zm10.5 1.001c0 1.381.557 2.631 1.459 3.535l1.541 1.535v-9.07h-8v2h6.5c.827 0 1.5.673 1.5 1.5v.5zm4.5 8v2h-16v-2h16zm-5-4.49v2.49h-6v-2.49c.534.343 1.142.537 1.783.603l.394.052c.79.096 1.679.195 2.54.195.862 0 1.751-.099 2.54-.195l.394-.052c.641-.066 1.249-.26 1.783-.603z" />
              </svg>
            </div>
  
            <div className="relative inline-block">
              {/* Confetti decoration */}
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-yellow-200/20 via-transparent to-transparent" />
                </div>
              </div>
  
              {/* Crown decoration */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16l-3-6 4.18 2.085 3.82-7.085 3.82 7.085 4.18-2.085-3 6h-10zm14 2v2h-14v-2h14zm-7-14l-1.5 2.5h3l-1.5-2.5z" />
                </svg>
              </div>
  
              <img
                src={userImage}
                alt="Kristin Watson"
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
  
            <h4 className="mt-4 font-medium text-gray-900">Kristin Watson</h4>
            <p className="text-sm text-gray-600">Product Manager</p>
  
            
          </div>
        </div>
      </div>
     

    );
};

export default Awards;