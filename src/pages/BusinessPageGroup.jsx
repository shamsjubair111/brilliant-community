import React from 'react';
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import CreatePost from '../components/common/CreatePost';
import LatestActivities from '../components/common/LatestActivities';
import ContactUs from '../components/common/ContactUs';
import RSS from '../components/common/RSS';
import PostList from '../components/common/PostList';
import AboutMe from '../components/common/AboutMe';

const BusinessPageGroup = () => {

    return (

        <div>

            <BusinessPageHeader/>

          


        {/* Grid */}

        <div className="grid grid-cols-12 p-6">

        <div className="col-span-9" style={{position: 'relative', top: "-50px"}}>

            <div><CreatePost/></div>

            <RSS/>

            <PostList/>

        


      {/* rank list grid */}

    
     
   
    
            
        </div>

        <div className="col-span-3">

            <div style={{position: 'relative', top: "-50px"}}><AboutMe/></div>
            <div className='mt-8'><LatestActivities/></div>
            <div className='mt-8'><ContactUs/></div>

            
        </div>

        </div>
            
     
            
        </div>
    );
};

export default BusinessPageGroup;