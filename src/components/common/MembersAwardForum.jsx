import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faEarthAmericas, faMessage} from '@fortawesome/free-solid-svg-icons';

const MembersAwardForum = () => {

    const stats = [
        { value: "125", label: "Total", icon: faLightbulb, backgroundColor: "#4d4efe"},
        { value: "15", label: "Active", icon: faEarthAmericas, backgroundColor: "#8484fe"},
        { value: "45", label: "Completed", icon: faMessage, backgroundColor: "#ffffff"},
      ]

    return (

       <div>
          {/* Statistics Cards */}
      <div className="grid grid-cols-3 gap-1">
      {stats.map((data) => (
        <div key={data?.label} className="p-4 text-center rounded-md" style={{backgroundColor: data.backgroundColor , color: data.backgroundColor ===  "#ffffff" ? "#142d6f" : "#ffffff"}}>
          <div> <FontAwesomeIcon className='text-2xl' icon={data?.icon} style={{color: data?.backgroundColor === "#ffffff" ? "#142d6f" : "#ffffff"}}/></div>
          <div className="text-xl font-bold">{data?.value}</div>
          <div className="text-xs">{data?.label}</div>
        </div>
        ))}
        </div>
       </div>

    );
};

export default MembersAwardForum;