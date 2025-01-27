import React from 'react';
import ProfileSettings from '../components/common/ProfileSettings';
import MemberActivityHeader from '../components/common/MemberActivityHeader';

const MemberProfileSettings = () => {
    return (
        <div>

            <div><MemberActivityHeader/></div>

            <div className=''><ProfileSettings/></div>
            
        </div>
    );
};

export default MemberProfileSettings;