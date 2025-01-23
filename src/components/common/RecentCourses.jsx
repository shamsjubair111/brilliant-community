import React from 'react';
import news from "../../assets/images/news.jpg";

const RecentCourses = () => {

    const courses = [
        {
          id: 1,
          title: "Problem-solving Skills for Better Success",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recentcourses-VFF7OZIqt5pWdNHxMoRFlMldvqah8e.png",
          category: "Life",
          lessons: 8,
          students: 55,
          completion: 75,
          lastActivity: "February 15, 2024 10:00 am",
          rating: 4.98,
          reviews: 58,
          price: 139.0,
        },
        {
          id: 2,
          title: "Piano for Singers: Quickly Learn to Accompany Yourself",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recentcourses-VFF7OZIqt5pWdNHxMoRFlMldvqah8e.png",
          lessons: 10,
          students: 60,
          completion: 75,
          lastActivity: "February 15, 2024 10:00 am",
          rating: 4.98,
          reviews: 58,
          price: 139.0,
        },
        {
          id: 3,
          title: "Java Programming Masterclass for Software Developers",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recentcourses-VFF7OZIqt5pWdNHxMoRFlMldvqah8e.png",
          category: "FEATURED",
          lessons: 10,
          students: 45,
          completion: 75,
          lastActivity: "February 15, 2024 10:00 am",
          rating: 4.98,
          reviews: 58,
          price: 139.0,
        },
        {
          id: 4,
          title: "Workflow strategy - from capture to output",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recentcourses-VFF7OZIqt5pWdNHxMoRFlMldvqah8e.png",
          lessons: 12,
          students: 23,
          completion: 75,
          lastActivity: "February 15, 2024 10:00 am",
          rating: 4.98,
          reviews: 58,
          price: 139.0,
        },
      ]

    return (

        <div className="bg-white m-6 p-6 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent courses</h2>
        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
          View all
          <span className="text-lg">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={news}
                alt={course.title}
                className="w-full aspect-[4/3] object-cover rounded-md"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full" style={{backgroundColor: "#142d6f"}}>
                <div className="w-5 h-5 text-gray-600" />
              </button>
              {course.category && (
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium ${
                    course.category === "FEATURED" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {course.category}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {course.lessons} lessons
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {course.students} Students
                </div>
              </div>

              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${course.completion}%` }} />
                </div>
                <div className="text-sm text-gray-600 mt-1">{course.completion}% COMPLETE</div>
              </div>

              <div className="text-sm text-gray-500 mb-3">Last activity on {course.lastActivity}</div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 font-medium text-gray-900">{course.rating}</span>
                    <span className="ml-1 text-gray-500">({course.reviews})</span>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold">${course.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    );
};

export default RecentCourses;