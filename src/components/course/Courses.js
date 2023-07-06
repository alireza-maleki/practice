import React from "react";

const Courses = (props) => {
  return (
    <div className="bg-white p-5 border rounded w-1/4 my-4">
      {props.coursesList.map((item) => (
        <div
          key={item.id}
          className="mx-4 p-2 flex items-center justify-between"
        >
          <span>{item.course}</span>
          <span
            onClick={() => props.onCompleted(item.id)}
            style={{ backgroundColor: item.isCompleted ? "green" : "white" }}
            className="cursor-pointer"
          >
            Ok!
          </span>
          <span
            onClick={() => props.onDeleCourse(item.id)}
            className="w-6 h-6 bg-red-600 border rounded text-center cursor-pointer"
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};

export default Courses;
