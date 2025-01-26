import React from 'react';
import userImage from "../../assets/images/user.jpg";

const Members = () => {

    const members = [
        {
          id: 1,
          name: "Kristin Watson",
          status: "Active 5 minutes ago"
         
        },
        {
          id: 2,
          name: "Kate Platonova",
          status: "Active 3 days ago"
        
        },
        {
          id: 3,
          name: "Ray Richardson",
          status: "Active 2 weeks, 2 days ago"
         
        },
        {
          id: 4,
          name: "Jack Henry",
          status: "Active 4 months, 3 weeks ago"
         
        },
      ]


    return (

        <div className='shadow-sm'>
            

            <div className="bg-white rounded-md p-4">
            <h2 className="font-medium text-gray-900 mb-4">Members</h2>
            <div className='flex justify-between mb-4'>
                <p className='px-2 py-1 rounded-md cursor-pointer' style={{backgroundColor: "#142d6f", color: "white"}}>Newest</p>
                <p className='px-2 py-1 rounded-md cursor-pointer' style={{backgroundColor: "white", color: "#142d6f", border: "1px solid gray"}}>Active</p>
                <p className='px-2 py-1 rounded-md cursor-pointer' style={{backgroundColor: "white", color: "#142d6f", border: "1px solid gray"}}>Popular</p>
               </div>

            <div className="space-y-4">
            {members.map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                <img
                    src={userImage}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
                    <p className="text-xs text-gray-500">{member.status}</p>
                </div>
                </div>
            ))}
            </div>
            </div>
        </div>

    );
};

export default Members;