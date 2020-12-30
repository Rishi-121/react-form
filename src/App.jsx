import React, { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <input
        type="text"
        name="fName"
        placeholder="First Name"
        onChange={handleChange}
        autoComplete="off"
        spellCheck="false"
        value={fullName.fName}
      />
      <input
        type="text"
        name="lName"
        placeholder="Last Name"
        onChange={handleChange}
        autoComplete="off"
        spellCheck="false"
        value={fullName.lName}
      />
      <button type="submit">Submit</button>
    </div>
  );
}
