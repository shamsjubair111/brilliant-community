import React from 'react';
import MembersLIst from '../components/common/MembersLIst';
import Pagination from '../components/common/Pagination';

const Members = () => {
    return (
        <div>

            <MembersLIst/>

           <div className='py-16'><Pagination/></div>
            
        </div>
    );
};

export default Members;