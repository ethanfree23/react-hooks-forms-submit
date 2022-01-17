import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required, puta!"])
    }
  }

  const listOfSubmissions = submittedData.map((data) => {
    return (
      <div key={data.index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="First Name..." />
        <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Last Name..." />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
        : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </>
  );
}

export default Form;

// we need to add an onSubmit event listener to the inputs
// we use the handle functions as the prop
// we have all of that already...
