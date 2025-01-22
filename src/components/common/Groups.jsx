import React from 'react';
import userImage from "../../assets/images/user.jpg";

const Groups = () => {
    return (
       
        <div className="mb-8">
        <h3 className="font-semibold mb-4">Groups</h3>
        <div className="space-y-4">
          {[
            { name: 'B2B Business', members: '12M' },
            { name: 'Marketing campaign', members: '17M' },
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
              <button className="text-blue-600 text-sm font-medium">Join</button>
            </div>
          ))}
        </div>
      </div>

    );
};

export default Groups;