import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments} from '@fortawesome/free-solid-svg-icons';

const LatestActivities = () => {
    return (
        
        <div>
            <h3 className="font-semibold mb-3 mt-8">Latest Activities</h3>
            <div className="space-y-2">
              {[
            'Testmon replied to the topic My news in the forum Web Designer News',
            'Testmon joined the group Fashion Ideas',
            'Testmon posted an update in the group Creative Thinking'
          ].map((topic, index) => (
               <div className='flex items-center'>
                 <FontAwesomeIcon icon={faComments} className="mr-4"  style={{color: "#17177b" , cursor: "pointer"}}/>
                 <p key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  {topic}
                </p>
               </div>
              ))}
            </div>
          </div>

    );
};

export default LatestActivities;