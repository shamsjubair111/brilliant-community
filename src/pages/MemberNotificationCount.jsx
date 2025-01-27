import React from 'react';
import MemberActivityHeader from '../components/common/MemberActivityHeader';
import ReadUnreadNotificationCount from '../components/common/ReadUnreadNotificationCount';

const MemberNotificationCount = () => {

    return (

        <div>

            <MemberActivityHeader/>

            <div><ReadUnreadNotificationCount/></div>
            
        </div>
    );
};

export default MemberNotificationCount;