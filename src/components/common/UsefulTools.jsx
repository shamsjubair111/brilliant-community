import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCircleQuestion, faUserPlus, faGear} from '@fortawesome/free-solid-svg-icons';

const UsefulTools = () => {

    const quickActions = [
        { icon: faBookOpen, label: "Financial Summary" },
        { icon: faCircleQuestion, label: "Need Support?" },
        { icon: faUserPlus, label: "Our Team" },
        { icon: faGear, label: "Manage Settings" },
      ]

    return (

        <div>

        
        <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-md">
        <h3 className='font-bold' style={{color: "#142d6f"}}>Useful Tools</h3>
        <br/>
        {quickActions.map((icon) => (
            <div key={icon?.label} className="p-4 flex flex-col items-center justify-center gap-2">
             <FontAwesomeIcon icon={icon?.icon} style={{color: "#142d6f"}}/>
            <span className="text-xs text-center" style={{color: "#142d6f"}}>{icon?.label}</span>
            </div>
        ))}
        </div>
            
        </div>
        
    );
};

export default UsefulTools;