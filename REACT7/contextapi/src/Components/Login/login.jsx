import React, { useState, useContext } from "react";
import userContext from "../../Context/userContext";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useContext(userContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(form);
  };
  return (
    <div>
      <form>
        <h1>Login Page</h1>
        <label htmlFor="Email">Email</label>
        <br />

        <input
          type="text"
          placeholder="Email"
          id="Email"
          style={{ border: "2px solid black" }}
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
        <br />
        <br />

        <label htmlFor="Password">Password</label>
        <br />

        <input
          type="password"
          placeholder="Password"
          id="Password"
          style={{ border: "2px solid black" }}
          value={form.password}
          onChange={(event) =>
            setForm({ ...form, password: event.target.value })
          }
        />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
