import React from 'react';
import MemberActivityHeader from '../components/common/MemberActivityHeader';
import General from '../components/common/General';

const MemberGeneral = () => {

    return (

        <div>

            <MemberActivityHeader/>

            <div className='pb-8'><General/></div>
            
        </div>
    );
};

export default MemberGeneral;