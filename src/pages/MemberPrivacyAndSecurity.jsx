import React from 'react';
import MemberActivityHeader from '../components/common/MemberActivityHeader';
import PrivacyAndSecurity from '../components/common/PrivacyAndSecurity';

const MemberPrivacyAndSecurity = () => {
    return (
        <div>

            <MemberActivityHeader/>

            <div className='pb-8'><PrivacyAndSecurity/></div>
            
        </div>
    );
};

export default MemberPrivacyAndSecurity;