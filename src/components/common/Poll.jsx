import React from 'react';

const Poll = () => {

    const tasks = [
        { id: 1, title: "Daily team - How to set the right KPI", completed: false },
        { id: 2, title: "Discussion Panel", completed: false },
        { id: 3, title: "Project Call", completed: true },
      ]


    return (

        <div>
             {/* Tasks Section */}
      <div className="p-4 bg-white rounded-md">
        <div className="mb-4">
          <h2 className="font-bold mb-3  text-lg" style={{color: "#142d6f"}}>Poll</h2>
          <p>Okay team - time to vote on the desert - you can only pick one! </p>
        </div>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-3">
              <input type='checkbox' id={`task-${task.id}`} checked={task.completed} />
              <label
                htmlFor={`task-${task.id}`}
                className={`text-sm ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}
              >
                {task.title}
              </label>
            </div>
          ))}
        </div>
      </div>
        </div>

    );
};

export default Poll;