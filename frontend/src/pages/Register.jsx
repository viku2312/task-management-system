import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/auth/register",
        form
      );

      alert("Registered Successfully");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;