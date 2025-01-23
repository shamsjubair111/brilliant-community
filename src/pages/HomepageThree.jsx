import React from 'react';
import Carousel from '../components/common/Carousel';
import BirthdayLargeCard from '../components/common/BirthdayLargeCard';
import News from '../components/common/News';
import Jobs from '../components/common/Jobs';
import RecentCourses from '../components/common/RecentCourses';
import OfficeClosing from '../components/common/OfficeClosing';
import UsefulTools from '../components/common/UsefulTools';
import Calendar2 from '../components/common/Calendar2';
import MembersAwardForum from '../components/common/MembersAwardForum';
import Poll from '../components/common/Poll';
import Groups2 from '../components/common/Groups2';
import ProgressBar from '../components/common/ProgressBar';

const HomepageThree = () => {

    return (

     <div className='pb-8' style={{backgroundColor: "#edeff4"}}>
       
       <div className="flex gap-6 p-6">

        {/* Left most column*/}
        <div className='flex-1'>

        <Carousel/>

        <div className='mt-8'><BirthdayLargeCard/></div>

        <div className='mt-8'><News/></div>

        <div className='mt-8'><Jobs/></div>



        </div>

        {/* Left middle column*/}
        <div className='w-72'>

          <OfficeClosing/>

          <div className='mt-8'><UsefulTools/></div>

          <div className='mt-8'><Calendar2/></div>

          <div className='mt-8'><MembersAwardForum/></div>

          <div className='mt-8'><Poll/></div>

          <div className='mt-8'><ProgressBar/></div>

          <div className='mt-8'><Groups2/></div>

        

        </div>

        {/* right column*/}
        <div className='w-72 pl-4'>

        

        </div>



        </div>


        {/* Recent Courses */}
        <div><RecentCourses/></div>



        </div>

    );
};

export default HomepageThree;