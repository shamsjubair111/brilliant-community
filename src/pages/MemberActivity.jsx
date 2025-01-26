import React from 'react';
import MemberActivityHeader from '../components/common/MemberActivityHeader';
import MemberActivityOptions from '../components/common/MemberActivityOptions';
import PostList from '../components/common/PostList';
import AboutMe from '../components/common/AboutMe';
import Photos from '../components/common/Photos';

const MemberActivity = () => {

    return (

        <div>

           <div className='shadow-lg'><MemberActivityHeader/></div>

           <div class="grid grid-cols-12">

            <div class="col-span-9">

                <div className='mx-12 my-8'><MemberActivityOptions/></div>

                <PostList/>
                
            </div>


            <div class="col-span-3 p-4 rounded">
               
            <div className='mt-2'><AboutMe/></div>

            <div className='mt-8'><Photos/></div>

            </div>
            </div>

        </div>
    );
};

export default MemberActivity;