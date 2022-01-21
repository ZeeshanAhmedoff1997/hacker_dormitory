import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";
import { checkValidity, checkStudentName } from "./Components/Search";
const title = "Hacker Dormitory";

const initialFormData = Object.freeze({
  studentName: "",
  joiningDate: "",
});

function App() {
  const [formData, updateFormData] = useState(initialFormData);
  const [error, setError] = useState();
  const [residents, setResidents] = useState([]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const resettingState = () => {
    setError();
    updateFormData({
      studentName: "",
      joiningDate: "",
    });
  };

  const handleSubmit = (e) => {
    const { studentName, joiningDate } = formData;
    e.preventDefault();
    console.log(formData);
    const student = checkStudentName(studentName);
    if (!student) {
      setError(`Sorry, ${studentName} is not a verified student!`);
      return;
    }
    const isStudentValid = checkValidity(joiningDate, student.validityDate);
    if (!isStudentValid) {
      setError(`Sorry, ${studentName}'s validity has Expired!`);
      return;
    }
    setResidents([...residents, student.name]);
    resettingState();
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
        <Error error={error} />
        <ResidentsList residents={residents} />
      </div>
    </div>
  );
}

export default App;
