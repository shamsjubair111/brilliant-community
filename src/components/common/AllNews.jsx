import React from 'react';
import news from "../../assets/images/news.jpg";

const AllNews = () => {

    const articles = [
        {
          id: 1,
          title: "How Integrating AI Into Our Ad Strategy Helped Us Triple Our Sales",
          excerpt: "These AI video tools can help you write scripts, generate clips, optimize your e...",
          readTime: "6 min read"
        },
        {
          id: 2,
          title: "Nonprofits: Steal These Marketing Practices from Tech Startups",
          excerpt: "If you're a nonprofit leader who wants to become more efficient, grow your audi...",
          readTime: "6 min read"
        }
      ]


    return (

     

        <div className="max-w-7xl mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                <article key={article.id} className="rounded-lg overflow-hidden cursor-pointer">
                    <div className="aspect-w-16 aspect-h-9">
                    <img src={news} alt="" className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">• {article.readTime}</div>
                    <h3 className="text-xl font-bold text-[#1a237e] mb-2 leading-tight">{article.title}</h3>
                    <p className="text-gray-600 text-sm">{article.excerpt}</p>
                    </div>
                </article>
                ))}
            </div>

            <button className="w-full mt-6 bg-[#1a237e] text-white py-3 rounded-full font-medium hover:bg-[#151d69] transition-colors">
                All news
            </button>
            </div>
            
       

    );
};

export default AllNews;