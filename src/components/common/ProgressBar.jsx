import React from 'react';

const ProgressBar = () => {

    const progress = [
        { label: "Completed task", value: 85 },
        { label: "Ongoing task", value: 65 },
        { label: "Upcoming task", value: 45 },
      ]

    return (
        
      <div className="p-4 bg-white rounded-md">
        <h2 className="font-semibold mb-4" style={{color: "#142d6f"}}>Progress Bar</h2>
        <div className="space-y-4">
          {progress.map((item) => (
            <div key={item.label} className="space-y-2" style={{color: "#142d6f"}}>
              <div className="flex items-center justify-between text-sm">
                <span>{item.label}</span>
                <span className="" style={{color: "#142d6f"}}>{item.value}%</span>
              </div>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow={item.value + ""} aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: `${item.value}%`, backgroundColor:"#142d6f" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
};

export default ProgressBar;