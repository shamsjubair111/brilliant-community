import React from 'react';
import userImage from "../../assets/images/user.jpg";

const Groups2 = () => {

    return (
       
               <div className="bg-white rounded-md p-6">
               <h3 className="font-semibold mb-4">Groups</h3>
               <div className='flex justify-between mb-4'>
                <p className='px-2 py-1 rounded-md cursor-pointer' style={{backgroundColor: "#142d6f", color: "white"}}>Newest</p>
                <p className='px-2 py-1 rounded-md cursor-pointer' style={{backgroundColor: "white", color: "#142d6f", border: "1px solid gray"}}>Active</p>
                <p className='px-2 py-1 rounded-md cursor-pointer' style={{backgroundColor: "white", color: "#142d6f", border: "1px solid gray"}}>Popular</p>
               </div>
               <div className="space-y-4">
                 {[
                   { name: 'B2B Business', members: 'Active 1 week ago' },
                   { name: 'Marketing campaign', members: 'Active 1 month, 3 days ago' },
                   { name: 'Design Secret', members: '9.5M' },
                   { name: 'Developer', members: '614K' }
                 ].map((group, index) => (
                   <div key={index} className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <img src={userImage} alt={group.name} className="w-10 h-10 rounded-lg" />
                       <div>
                         <p className="font-medium">{group.name}</p>
                         <p className="text-sm text-gray-500">{group.members}</p>
                       </div>
                     </div>
                   
                   </div>
                 ))}
               </div>
             </div>
    );
};

export default Groups2;