import React, { useState } from "react";
import Courses from "../course/Courses";

const Form = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [data, setData] = useState("");

  const submitData = (e) => {
    e.preventDefault();

    const newCourses = {
      id:
        coursesList.length === 0
          ? 1
          : coursesList[coursesList.length - 1].id + 1,
      course: data,
      isCompleted: false
    };

    setCoursesList([...coursesList, newCourses]);
    setData("");
  };

  // Delete Item in List
  const deleteHandler = (courseId) => {
    const newCourseList = coursesList.filter(
      (course) => course.id !== courseId
    );

    setCoursesList(newCourseList);
  };

  const onCompletedHandler = (id) => {
    const newCourseList = coursesList.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return { ...item };
      }
    });

    setCoursesList(newCourseList);
  };

  console.log(coursesList);

  return (
    <div className="w-full h-screen bg-blue-900 pt-5 mx-auto flex itmes-center justify-center flex-col">
      <div className="w-1/4 h-40 p-4 border rounded bg-white shadow">
        <label>Detail : </label>
        <input
          className="border-none outline-none py-2 px-5 bg-slate-300 "
          type="text"
          placeholder="Type any thing ..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div className="flex items-center justify-center">
          <button
            onClick={submitData}
            className="mt-4 bg-yellow-500 p-2 border rounded"
          >
            Submit
          </button>
        </div>
      </div>

      {coursesList.length > 0 && (
        <Courses
          onCompleted={onCompletedHandler}
          onDeleCourse={deleteHandler}
          coursesList={coursesList}
        />
      )}
    </div>
  );
};

export default Form;
