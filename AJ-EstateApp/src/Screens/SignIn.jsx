import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  // KEEP THE TRACK OF USER ACTIVITY ON THE WEB PAGE IN SYSTEM CONSOLE
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // HANDLE PAGE REFRESH SUBMITION BUTTON PRESS BY THE USER
  // HANDLE API CALL TO SUBMIT USER RESPONSE TO DATABASE
  //TRY AND CATCH TO PERFORM DYNAMIC OPERATION BETWEEN FRONTEND AND BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-yellow-700">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3  rounded-lg focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3  rounded-lg focus:outline-none "
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-green-800 border p-3 text-slate-100 
        uppercase rounded-lg hover:opacity-50 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Not yet have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
