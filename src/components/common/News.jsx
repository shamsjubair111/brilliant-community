import React from 'react';
import news from "../../assets/images/news.jpg";

const News = () => {

    const articles = [
        {
          id: 1,
          title: "Build up healthy habits and strong peaceful life.",
          readTime: "6 min read",
          date: "January 12, 24",
          authorImage: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 2,
          title: "Understanding CSS Grid: Creating a Grid Container",
          readTime: "6 min read",
          date: "January 12, 24",
          authorImage: "/placeholder.svg?height=32&width=32",
        }
      
      ]


    return (
        
       <div className="max-w-5xl mx-auto">
      {/* News Header */}
      <h1 className="text-xl font-semibold mb-4">News</h1>

      {/* Filter Tabs */}
      
       <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">All</button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
          Company Update
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
          News and Trends
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
          Tips
        </button>
      </div>

    
     

      {/* Featured Article */}
      <div className="mb-8 grid grid-cols-12 gap-8">
        <div className="relative rounded-2xl overflow-hidden col-span-7">
          <img
            src={news}
            alt="Featured article"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <img src={news} alt="Author" className="w-8 h-8 rounded-full" />
              <span className="text-white text-sm">6 min read</span>
            </div>
            <h2 className="text-white text-xl font-semibold mb-2">
              How to bring the season into your great marketing.
            </h2>
            <p className="text-gray-200 text-sm mb-2">
              Locus viverra vitae congue eu consequat ac. Cursus metus aliquam eleifend mi. Posuere sollicitudin aliq...
            </p>
            <span className="text-gray-300 text-sm">January 12, 24</span>
          </div>
        </div>

        <div className="flex items-start gap-4 col-span-5">
            <img src={news} alt="Author" className="w-8 h-8 rounded-full mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <span>{articles[0].readTime}</span>
              </div>
              <h3 className="text-lg font-bold mb-1" style={{color: "#142d6f"}}>{articles[0].title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque officiis ducimus similique. Error non possimus unde. Adipisci, facilis natus commodi, debitis atque quia non, sapiente distinctio impedit dignissimos rerum?</p>
              <span className="text-sm text-gray-600">{articles[0].date}</span>
            </div>
          </div>
      </div>

      {/* Article List */}
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="flex items-start gap-4">
            <img src={news} alt="Author" className="w-8 h-8 rounded-full mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-lg font-bold mb-1" style={{color: "#142d6f"}}>{article.title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque officiis ducimus similique. Error non possimus unde. Adipisci, facilis natus commodi, debitis atque quia non, sapiente distinctio impedit dignissimos rerum?</p>
              <span className="text-sm text-gray-600">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    );
};

export default News;