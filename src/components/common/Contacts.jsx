import React, { useState } from 'react';
import userImage from "../../assets/images/user.jpg";

const Contacts = () => {

    const [activeTab, setActiveTab] = useState('Friends');
  
    const contacts = [
      { id: 1, name: 'Scott Smith', online: true },
      { id: 2, name: 'Martin Gutberlet', online: true },
      { id: 3, name: 'Marc Vandeveer',  online: true },
      { id: 4, name: 'Kristin Watson',  online: true },
      { id: 5, name: 'Kathrin Hopkins',  online: true }
    ];


    return (

        <div className="rounded-xl p-4 max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-blue-900 font-bold text-lg">Contacts</h2>
          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
  
        <div className="flex gap-2 mb-4">
          <button 
            className={`px-4 py-1.5 rounded-md text-sm font-medium ${
              activeTab === 'Friends' 
                ? 'text-white' 
                : 'text-white'
            }`}
            style={{backgroundColor: "#658bf0"}}
            onClick={() => setActiveTab('Friends')}
          >
            Friends
          </button>
          <button 
            className={`px-4 py-1.5 rounded-md text-sm font-medium ${
              activeTab === 'Groups' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setActiveTab('Groups')}
          >
            Groups
          </button>
        </div>
  
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={userImage} 
                  alt={contact.name} 
                  className="w-10 h-10 rounded-full"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <span className="text-blue-900 font-medium">{contact.name}</span>
            </div>
          ))}
        </div>
  
        <button className="text-blue-500 text-sm flex items-center mt-4">
          See more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    );
};

export default Contacts;