import React from 'react';
import MemberActivityHeader from '../components/common/MemberActivityHeader';
import Notification from '../components/common/Notification';

const MemberNotification = () => {

    return (

        <div>

            <MemberActivityHeader/>

            <div className='pb-8'><Notification/></div>
            
        </div>
    );
};

export default MemberNotification;