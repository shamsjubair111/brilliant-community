import React from 'react';

const LeaveApplication = () => {

    const leaveTypes = [
        { id: "03", type: "CASUAL LEAVE" },
        { id: "01", type: "SICK LEAVE" },
        { id: "08", type: "PAID VACATION" },
        { id: "06", type: "SPECIAL LEAVE" },
      ]


    return (

        <div>
            
            <div className="bg-white rounded-xl p-4">
        <h2 className="font-medium text-gray-900 mb-4">Leave Application</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">From</label>
            <input type="date" className="w-full p-2 border rounded-lg text-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">To</label>
            <input type="date" className="w-full p-2 border rounded-lg text-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Reason</label>
            <select className="w-full p-2 border rounded-lg text-sm">
              <option>Select reason</option>
              <option>Sick Leave</option>
              <option>Vacation</option>
              <option>Personal</option>
            </select>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg text-sm font-medium">Apply Leave</button>
        </form>

        {/* Leave Types Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {leaveTypes.map((leave) => (
            <div key={leave.id} className="p-3 rounded-lg text-center" style={{backgroundColor: "#e2eaff"}}>
              <div className="text-xl font-bold" style={{color: "#142d6f"}}>{leave.id}</div>
              <div className="text-xs" style={{color: "#142d6f"}}>{leave.type}</div>
            </div>
          ))}
        </div>
      </div>

        </div>

    );
};

export default LeaveApplication;