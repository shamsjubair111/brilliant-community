import React from 'react';
import { Link } from 'react-router-dom';

const KnowledgeBaseTwo = () => {

    const SidebarItem = ({ icon, text }) => (
        <Link
          href="#"
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
        >
          <span className="flex items-center">
            <span className="mr-3">{icon}</span>
            {text}
          </span>
          <span className="text-white w-5 h-5 rounded-xl text-center" style={{backgroundColor: "#142d6f"}}>6</span>
          </Link>
      )

      const SidebarSection = ({ title, items }) => (
        <div className="mb-4">
          <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index}>
               
                  {item}
                
              </li>
            ))}
          </ul>
        </div>
      )


    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50" style={{backgroundColor: "#e9eaf0"}}>
        {/* Left Sidebar */}
        <aside className="w-full lg:w-72 border-r border-gray-200 bg-white px-4 pt-16 lg:block hidden" style={{backgroundColor: "#e9eaf0"}}>
          <nav className="space-y-1">
            <SidebarSection
              title="Getting started"
              items={[
                "How to Sign Up for updates?",
                "How to Customize Your Preferences?",
                "How To Purchase Our Subscription?",
                "Do You Have Any Refund or Return Policies?",
              ]}
            />
            <SidebarItem icon="⚙️" text="Configuration" />
            <SidebarItem icon="💾" text="Installations" />
            <SidebarItem icon="🔧" text="Setting Up" />
            <SidebarItem icon="💳" text="Subscription" />
            <SidebarItem icon="💰" text="Payment Process" />
            <SidebarItem icon="🔗" text="Integrations" />
            <SidebarItem icon="❓" text="FAQs" />
          </nav>
        </aside>
      
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-3xl px-4 py-8">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Docs
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Getting Started
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <span className="text-gray-900">How to Sign Up for updates?</span>
                </li>
              </ol>
            </nav>
      
            {/* Article */}
            <article>
              <h1 className="mb-4 text-4xl font-bold" style={{color: "#142d6f"}}>How to Sign Up for updates?</h1>
              <div className="mb-6 flex items-center space-x-4 text-sm text-gray-500">
                <span>Posted on May 15, 2024</span>
                <span>Updated on May 24, 2024</span>
                <span>5 min read</span>
              </div>
      
              <div className="prose max-w-none">
                <h2 className='mb-3 font-bold text-2xl' style={{color:"#142d6f"}}>Step 1: Navigate To 'News & Updates' Page</h2>
                <p>
                  Quis verius quam quisque id lorem vel ipsum elementum. Pellentesque adipiscing commodo elit ut.
                  Venenatis urna cursus eget nunc scelerisque viverra mauris. Maura in aliquam sem fringilla ut morbi
                  tincidunt augue interdum.
                </p>
      
                <p className="font-medium text-1xl my-3" style={{color:"#142d6f"}}>First, navigate to the 'News & Updates' page on our website.</p>
                <p className='mb-3'>
                  Et ultrices neque ornare aenean euismod. Vestibulum lectus mauris ultrices eros in. Consectetur
                  adipiscing elit ut aliquam purus sit amet luctus venenatis ut phasellus et. Et sollicitudin ac orci
                  phasellus egestas tellus.
                </p>
      
                <ul className='list-dotted list-inside'>
                  <li><span className='text-3xl mr-2' style={{color: "#142d6f"}}>.</span>Theme natoque penatibus et magnis dis parturient montes, augue velit cursus</li>
                  <li><span className='text-3xl mr-2' style={{color: "#142d6f"}}>.</span>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo</li>
                  <li> <span className='text-3xl mr-2' style={{color: "#142d6f"}}>.</span>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</li>
                </ul>
      
                <h2 className='my-3 font-bold text-2xl' style={{color:"#142d6f"}}>Step 2: Enter Your Email Address</h2>
                <p className='mb-3'>
                  Quisque non tellus orci ac auctor. Orci nulla pellentesque dignissim enim sit. Pellentesque nec nam
                  aliquam sem et tortor sit faucibus nisl tincidunt eget nullam non nisi est. Eget aliquet nibh praesent
                  tristique magna sit amet purus.
                </p>
      
                <h2 className='my-3 font-bold text-2xl' style={{color:"#142d6f"}}>Step 3: Confirm Email Subscription</h2>
                <p>Click on the 'Subscribe To Newsletter' button to complete signing up for the latest updates.</p>
                <p className="text-sm text-gray-500 mt-4 mb-8">
                  If you face any problems contact our 24/7 support team for assistance.
                </p>
              </div>
      
              {/* Article Footer */}
              <div className="mb-4 flex justify-between">
                <p className="text-1xl font-bold" style={{position: "relative", top: "15px", color: "#142d6f"}}>Is this article helpful? What are your Feelings</p>
                <div className="mt-2 flex">
                  {["😃", "🙂", "😐"].map((emoji) => (
                    <button key={emoji} className="rounded-full border border-gray-200 p-2 text-xl hover:bg-gray-50">
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
      
              <div className='flex justify-center'>
                <p className="mb-2 text-sm text-gray-600 mr-8" style={{position: "relative", top: "6px", color: "#142d6f"}}>Share This Article</p>
                <div className="flex space-x-2">
                  {[
                    { bg: "bg-blue-600", text: "F" },
                    { bg: "bg-sky-500", text: "T" },
                    { bg: "bg-green-500", text: "W" },
                    { bg: "bg-yellow-500", text: "E" },
                  ].map((item) => (
                    <button
                      key={item.text}
                      className={`${item.bg} h-8 w-8 rounded-full text-sm text-white hover:opacity-90`}
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </main>
      
        {/* Right Sidebar - Table of Contents */}
        <aside className="w-full lg:w-64 border-l border-gray-200 bg-white p-4 lg:block hidden" style={{backgroundColor: "#e9eaf0"}}>
          <div className="sticky top-4">
            <h3 className="mb-4 font-medium text-gray-900">Table Of Contents</h3>
            <nav className="space-y-1 text-sm">
              <a href="#" className="block text-blue-600 hover:underline">
                Step 1: Navigate To News & Updates Page
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 hover:underline">
                Step 2: Enter Your Email Address
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 hover:underline">
                Step 3: Confirm Email Subscription
              </a>
            </nav>
          </div>
        </aside>
      </div>
      
    );
};

export default KnowledgeBaseTwo;