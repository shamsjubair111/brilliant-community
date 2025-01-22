import React from 'react';
import BirthdaySmallCard from '../components/common/BirthdaySmallCard';
import LeaderBoard from '../components/common/LeaderBoard';
import TrendingHashtags from '../components/common/TrendingHashtags';
import MyDay from '../components/common/MyDay';
import CreatePost from '../components/common/CreatePost';
import RSS from '../components/common/RSS';
import PostList from '../components/common/PostList';
import ActiveMembers from '../components/common/ActiveMembers';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import LatestActivities from '../components/common/LatestActivities';

const Activity = () => {

  

    return (


        <div className="flex gap-6 p-6">
          
        {/* Left Column */}
        
        <div className="w-72">
          
          {/* Birthday Card */}

          <BirthdaySmallCard/>
         
  
          {/* Leaderboard */}
          <LeaderBoard/>
  
          {/* Trending Hashtags */}
           <TrendingHashtags/>

        </div>
  
        {/* Middle Column - Main Feed */}
        <div className="flex-1">

      
        
          <div className="rounded-lg shadow-sm">
            {/* Header */}

           <MyDay/>
  
            {/* Post Creation */}
            
            <CreatePost/>
  
            {/* RSS Feed Section */}
            
             <RSS/>
  
            {/* Feed Posts */}
             
             <PostList/>

          </div>
        </div>
  
        {/* Right Column */}

        <div className="w-72">

          {/* Active Members */}
           <ActiveMembers/>


          {/* Groups */}
           
           <Groups/>
  
          {/* Recent Topics */}
          
           <RecentTopics/>


          {/* Latest Activities */}
           
           <LatestActivities/>


        </div>

      </div>

    );
};

export default Activity;