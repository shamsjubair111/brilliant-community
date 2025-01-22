import React from 'react';

const RecentTopics = () => {
    return (
        
         <div>
                    <h3 className="font-semibold mb-3">Recent Topics</h3>
                    <div className="space-y-2">
                      {[
                        'Aerial exercise challenge',
                        'Open API GPT-4s having a conversation with audio',
                        'Best Practices for Great Landing Pages',
                        'Release an Official Crypto Mobile App'
                      ].map((topic, index) => (
                        <p key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                          {topic}
                        </p>
                      ))}
                    </div>
                  </div>
                  
    );
};

export default RecentTopics;