import React from 'react';
import LatestNews from '../components/common/LatestNews';
import TechBlogs from '../components/common/TechBlogs';
import UpcomingEvent from '../components/common/UpcomingEvent';
import ActiveMembers from '../components/common/ActiveMembers';
import MyDay from '../components/common/MyDay';
import CreatePost from '../components/common/CreatePost';
import RSS from '../components/common/RSS';
import PostList from '../components/common/PostList';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import LatestActivities from '../components/common/LatestActivities';
import FriendRequest from '../components/common/FriendRequest';
import Contacts from '../components/common/Contacts';


const HomePageOne = () => {



    return (

        <div className="flex gap-6 p-6">

            {/* Left Column */}

            <div className="w-72">

            <LatestNews/>

            <TechBlogs/>

            <UpcomingEvent/>

           <div className='mt-5 ml-3'><ActiveMembers/></div>

            </div>

            {/* Main Column */}

            <div className="flex-1">

                <MyDay/>

                <CreatePost/>

                <RSS/>

                <PostList/>

      
            </div>

            {/* Right Column*/}

            <div className="w-72">

            <div className='mt-4'><Groups/></div>

            <RecentTopics/>

            <LatestActivities/>

           <div className='mt-4'><FriendRequest/></div>

           <Contacts/>


            </div>



        </div>

    );
};

export default HomePageOne;