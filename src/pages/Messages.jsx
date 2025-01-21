import React from 'react';

const Messages = () => {
    return (

        <div className='p-16'>

        <div className="flex h-screen bg-gray-50">
        {/* Left Sidebar */}
        <div className="w-80 border-r border-gray-200 bg-white">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">All Conversations (5)</span>
              <span className="text-gray-400">▼</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="text-xl">🔍</span>
            </button>
          </div>
  
          {/* Conversation List */}
          <div className="space-y-1 p-2">
            {[
              { name: "Jimmy", message: "Hi Jes, how are you? we have", time: "just now", unread: 1 },
              { name: "Victor", message: "I see you have a dog. I have one, too", time: "3m" },
              { name: "Scott", message: "Scott is waiting for a message from you", time: "25m" },
              { name: "John", message: "John is waiting for a message from you", time: "1 day" },
              { name: "5 Participants", message: "Hi :) What would you choose: outdoors ac...", time: "04/15" },
            ].map((chat, index) => (
              <div key={index} className="flex cursor-pointer items-center gap-3 rounded-lg p-3 hover:bg-gray-50">
                <div className="relative h-12 w-12">
                  <div className="h-full w-full rounded-full bg-blue-100 text-center leading-[48px]">{chat.name[0]}</div>
                  {index === 0 && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400"></div>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{chat.name}</span>
                    <span className="text-sm text-gray-500">{chat.time}</span>
                  </div>
                  <p className="truncate text-sm text-gray-500">{chat.message}</p>
                </div>
                {chat.unread && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Main Chat Area */}
        <div className="flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <div className="h-full w-full rounded-full bg-blue-100 text-center leading-[40px]">V</div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400"></div>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Victor</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Online
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">🇨🇦 Canada</span>
                </div>
              </div>
            </div>
  
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600">⭐</button>
              <button className="text-gray-400 hover:text-gray-600">↗️</button>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>
          </div>
  
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-4 text-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">Start of conversation</span>
            </div>
            <div className="mb-4 text-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">15:04 April 14, 2024</span>
            </div>
  
            {/* Messages */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-center leading-8">J</div>
                <div className="max-w-[70%]">
                  <div className="rounded-2xl p-3" style={{backgroundColor: "#e2eaff"}}>
                    <p>Hey Jess, do you have a moment to go over the presentation for tomorrow's meeting?</p>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                    <span>9:09 am</span>
                    <span>❤️</span>
                  </div>
                </div>
              </div>
  
              <div className="flex flex-row-reverse gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-center leading-8">M</div>
                <div className="max-w-[70%]">
                  <div className="rounded-2xl p-3 text-white" style={{backgroundColor:"#142d6f"}}>
                    <p>Sure, John. I have a few minutes now. What do you need help with?</p>
                  </div>
                  <div className="mt-1 flex flex-row-reverse items-center gap-2 text-xs text-gray-500">
                    <span>9:09 am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Message Input */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600">😊</button>
            <button className="text-gray-400 hover:text-gray-600">📎</button>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
             
              <button className="rounded-lg px-4 py-2 text-white" style={{backgroundColor:"#142d6f"}} >Send</button>
            </div>
          </div>
        </div>
  
        {/* Right Actions */}
        <div className="w-64 border-l border-gray-200 bg-white p-4">
          <div className="space-y-4">
            {[
              { icon: "🔇", text: "Mute conversation" },
              { icon: "👥", text: "Add new participants" },
              { icon: "↗️", text: "Leave conversation" },
              { icon: "🗑️", text: "Delete conversation" },
            ].map((action, index) => (
              <button
                key={index}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                <span>{action.icon}</span>
                <span>{action.text}</span>
              </button>
            ))}
          </div>
        </div>

      
      </div>



      </div>
    );
};

export default Messages;