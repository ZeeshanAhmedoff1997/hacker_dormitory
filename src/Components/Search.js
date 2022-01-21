import React from "react";
import { STUDENTS } from "../studentsList";
// `joiningDate` && `validityDate` format "yyyy-mm-dd"
import PropTypes from "prop-types"; // ES6

export function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

export function checkStudentName(studentName) {
  for (let i in STUDENTS) {
    if (STUDENTS[i].name.toLowerCase() == studentName.toLowerCase()) {
      return STUDENTS[i];
    }
  }
}

function Search({ handleChange, handleSubmit }) {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            name="studentName"
            onChange={handleChange}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            name="joiningDate"
            onChange={handleChange}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}
Search.prototype = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Search;
