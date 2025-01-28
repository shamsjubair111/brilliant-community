import React from 'react';
import userImage from "../assets/images/user.jpg"
import news from "../assets/images/news.jpg"
import ActiveMembers from '../components/common/ActiveMembers';
import LatestActivities from '../components/common/LatestActivities';
import ContactUs from '../components/common/ContactUs';

const GroupList = () => {
    

    const groups = [
        {
          id: 1,
          name: "B2B Business",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 10 minutes ago",
          stats: {
            posts: "156k Posts",
            members: "324 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: false,
        },
        {
          id: 2,
          name: "Marketing campaign",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 10 minutes ago",
          stats: {
            posts: "195k Posts",
            members: "353 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: false,
        },
        {
          id: 3,
          name: "Design Secret",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 11 minutes ago",
          stats: {
            posts: "156k Posts",
            members: "324 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: false,
        },
        {
          id: 4,
          name: "Developer",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 10 minutes ago",
          stats: {
            posts: "156k Posts",
            members: "434 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: true,
        },
        {
          id: 5,
          name: "Art photographers",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 12 minutes ago",
          stats: {
            posts: "195k Posts",
            members: "353 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: true,
        },
        {
          id: 6,
          name: "The Talk Show",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 10 minutes ago",
          stats: {
            posts: "156k Posts",
            members: "324 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: true,
        },
        {
          id: 7,
          name: "Funny things",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 10 minutes ago",
          stats: {
            posts: "156k Posts",
            members: "324 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: true,
        },
        {
          id: 8,
          name: "Art Group",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 11 minutes ago",
          stats: {
            posts: "195k Posts",
            members: "353 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: true,
        },
        {
          id: 9,
          name: "UX/UX Design",
          icon: "/placeholder.svg?height=40&width=40",
          coverImage:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grouplist-iLQvJFwLgSCZK72pYcV2iDm069WDuW.png",
          activity: "Active 9 hours, 11 minutes ago",
          stats: {
            posts: "156k Posts",
            members: "324 Members",
          },
          members: [
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
            { avatar: "/placeholder.svg?height=24&width=24" },
          ],
          joined: true,
        },
      ]


    return (

        <div>

        <div className='flex flex-col  items-center' style={{backgroundColor: "#4d4efe",height:"300px"}}>


        <h1 className='text-white text-4xl font-bold mb-2 mt-12'>Groups</h1>

        <p className='text-white mb-6'>Browse all the groups of the community!</p>

        <div className="flex w-full max-w-3xl items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        </svg>
        <input
        type="text"
        placeholder="Search Group"
        className="flex-1 border-0 bg-transparent text-sm focus:outline-none"
        />

        <button className="rounded-full bg-[#303030] px-6 py-2 text-sm text-white hover:bg-[#404040] focus:outline-none focus:ring-2 focus:ring-[#303030] focus:ring-offset-2">
        Search
        </button>
        </div>

        </div>


        {/* Grid */}

        <div className="grid grid-cols-12 p-6 gap-6">

        <div className="col-span-9">

        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-md">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-blue-600 font-medium">
            All Members
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">35</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            My Group
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">5</span>
          </button>
          
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 text-blue-600 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>

          <div className="relative">
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              Order By:
              <span className="font-medium">Newest</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {/* Group list grid */}

      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            {/* Card Header with Cover Image */}
            <div className="relative h-32">
              <div className="absolute inset-0">
                <img src={userImage} alt="" className="w-full h-full object-cover" />
              </div>
              {/* More Options Button */}
              <button className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>

            {/* Group Content */}
            <div className="p-4">
              {/* Group Icon and Info */}
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={news}
                  alt={group.name}
                  className="w-10 h-10 rounded-full -mt-8 border-2 border-white shadow-sm"
                  style={{position: "relative",bottom: "10px"}}
                />
                <div className="">
                  <h3 className="font-semibold text-gray-900 truncate">{group.name}</h3>
                  <p className="text-xs text-gray-500">{group.activity}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span>{group.stats.posts}</span>
                <span>{group.stats.members}</span>
              </div>

              {/* Members and Action */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {group.members.map((member, index) => (
                    <img
                      key={index}
                      src={userImage}
                      alt=""
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <button
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                    ${group.joined ? "text-gray-700 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                  {group.joined ? "View group" : "Join group"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

            
        </div>

        <div className="col-span-3">

            <div className='mt-4'><ActiveMembers/></div>
            <div className='mt-8'><LatestActivities/></div>
            <div className='mt-8'><ContactUs/></div>

            
        </div>

        </div>
            
        </div>
    );
};

export default GroupList;