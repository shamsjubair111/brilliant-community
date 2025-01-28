import React from 'react';
import Pagination from '../components/common/Pagination';
import ActiveMembers from '../components/common/ActiveMembers';
import LatestActivities from '../components/common/LatestActivities';
import ContactUs from '../components/common/ContactUs';

const RankList = () => {


    const ranks = [
        {
          id: 1,
          title: "Beginner",
          description: "It's time to begin your journey! Get started with the basics and work your way up.",
          color: "from-orange-300 to-orange-400",
          borderColor: "border-orange-200",
          shadowColor: "shadow-orange-100",
          requirements: [
            {
              text: "Write an article or share relevant content",
              completed: true,
              points: 50,
            },
            {
              text: "Share 5 relevant RSS feed",
              completed: false,
              points: 30,
            },
            {
              text: "Reach a minimum of 100 Likes",
              completed: false,
              points: 20,
            },
          ],
        },
        {
          id: 2,
          title: "Talented",
          description: "You're starting to show your skills! Keep up the great work and continue learning.",
          color: "from-orange-400 to-orange-500",
          borderColor: "border-orange-300",
          shadowColor: "shadow-orange-100",
          requirements: [
            {
              text: "Write an article or share relevant content",
              completed: true,
              points: 100,
            },
            {
              text: "Share 10 relevant RSS feed",
              completed: false,
              points: 50,
            },
            {
              text: "Reach a minimum of 500 Likes",
              completed: false,
              points: 50,
            },
          ],
        },
        {
          id: 3,
          title: "Advanced",
          description: "You've mastered the fundamentals and are ready for more complex challenges.",
          color: "from-yellow-300 to-yellow-400",
          borderColor: "border-yellow-200",
          shadowColor: "shadow-yellow-100",
          requirements: [
            {
              text: "Write 5 articles or share relevant content",
              completed: false,
              points: 200,
            },
            {
              text: "Share 20 relevant RSS feed",
              completed: false,
              points: 100,
            },
            {
              text: "Reach a minimum of 1000 Likes",
              completed: false,
              points: 100,
            },
          ],
        },
        {
          id: 4,
          title: "Expert",
          description: "Your expertise is showing! You're becoming a valuable member of the community.",
          color: "from-yellow-400 to-yellow-500",
          borderColor: "border-yellow-300",
          shadowColor: "shadow-yellow-100",
          requirements: [
            {
              text: "Write 10 articles or share relevant content",
              completed: false,
              points: 500,
            },
            {
              text: "Share 50 relevant RSS feed",
              completed: false,
              points: 250,
            },
            {
              text: "Reach a minimum of 5000 Likes",
              completed: false,
              points: 250,
            },
          ],
        },
        {
          id: 5,
          title: "Legendary",
          description: "You've achieved legendary status! Your contributions are making a real impact.",
          color: "from-amber-400 to-amber-500",
          borderColor: "border-amber-300",
          shadowColor: "shadow-amber-100",
          requirements: [
            {
              text: "Write 20 articles or share relevant content",
              completed: false,
              points: 1000,
            },
            {
              text: "Share 100 relevant RSS feed",
              completed: false,
              points: 500,
            },
            {
              text: "Reach a minimum of 10000 Likes",
              completed: false,
              points: 500,
            },
          ],
        },
        {
          id: 6,
          title: "Almighty",
          description: "The highest honor! You've reached the pinnacle of achievement.",
          color: "from-amber-500 to-amber-600",
          borderColor: "border-amber-400",
          shadowColor: "shadow-amber-100",
          requirements: [
            {
              text: "Write 50 articles or share relevant content",
              completed: false,
              points: 2000,
            },
            {
              text: "Share 200 relevant RSS feed",
              completed: false,
              points: 1000,
            },
            {
              text: "Reach a minimum of 50000 Likes",
              completed: false,
              points: 1000,
            },
          ],
        },
      ]


    return (

       <div>

        <div className='flex flex-col  items-center' style={{backgroundColor: "#4d4efe",height:"200px"}}>


        <h1 className='text-white text-4xl font-bold mb-2 mt-12'>Ranks</h1>

        <p className='text-white mb-6'>Browse all the ranks of the community!</p>

        

        </div>


        {/* Grid */}

        <div className="grid grid-cols-12 p-6 gap-6">

        <div className="col-span-9">

        


      {/* rank list grid */}

      <div className="max-w-7xl p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ranks.map((rank) => (
          <div
            key={rank.id}
            className={` rounded-xl border ${rank.borderColor} ${rank.shadowColor} shadow-lg hover:shadow-xl transition-all duration-200`}
          >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              {/* Medal Icon with Rank */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${rank.color} p-3 shadow-inner`}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                      <path
                        d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white">
                    {rank.id}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{rank.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{rank.description}</p>
              </div>
            </div>

            

            {/* Requirements Section */}
            <div className="p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm font-semibold text-gray-900">Requirements</span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-4">
                  {rank.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={requirement.completed}
                          readOnly
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm text-gray-600">{requirement.text}</span>
                          <span className="flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                            +{requirement.points} pts
                          </span>
                        </div>
                        {requirement.completed && (
                          <span className="text-xs text-green-600 mt-1 block">✓ Completed</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
     
     <div className='my-8'><Pagination/></div>
    
            
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

export default RankList;