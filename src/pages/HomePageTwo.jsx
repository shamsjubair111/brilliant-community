import React from 'react';
import Carousel from '../components/common/Carousel';
import UnnanmedComponent from '../components/common/UnnanmedComponent';
import FeaturedNews from '../components/common/FeaturedNews';
import AllNews from '../components/common/AllNews';
import TechBlogs from '../components/common/TechBlogs';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';
import CompanyUpdates from '../components/common/CompanyUpdates';
import UpcomingEvent from '../components/common/UpcomingEvent';
import Contacts from '../components/common/Contacts';
import Testimonials from '../components/common/Testimonials';
import NewsLetter from '../components/common/NewsLetter';
import ShowTime from '../components/common/ShowTime';
import Calendar from '../components/common/Calendar';

const HomePageTwo = () => {
    return (

        <div className="flex gap-6 p-6">


            {/* Left most column*/}
            <div className='flex-1 mt-8'>

                <Carousel/>

                <UnnanmedComponent/>

                <FeaturedNews/>

                <AllNews/>

            </div>

            {/* Left middle column*/}
            <div className='w-72'>

                <TechBlogs/>

                <div className='mt-8 pl-4'><Groups/></div>

                <div className='pl-4 mt-8'><RecentTopics/></div>

                <div className='mt-8'><CompanyUpdates/></div>

                <div className='mt-8 pl-4'><ContactUs/></div>

            </div>

            {/* right column*/}
            <div className='w-72 pl-4'>

              <div className='mt-7'><Calendar/></div>

              <div className='mt-7'><ShowTime/></div>
            
              <div className='mt-8'><NewsLetter/></div>

              <div className='mt-8'><Testimonials/></div>

              <div className='bg-white rounded-md mt-8'><UpcomingEvent/></div>

              <div className='mt-8'><Contacts/></div>

            </div>


            
        </div>
    );
};

export default HomePageTwo;