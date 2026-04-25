import React, { useState } from "react";

function PatientForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim()) {
      alert("Both fields are required!");
      return;
    }
    // Log values
    console.log("Patient Name:", name);
    console.log("Email:", email);

    // Reset fields
    setName("");
    setEmail("");
  };

  return (
    <div style={styles.container}>
      <h2>Patient Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default PatientForm;