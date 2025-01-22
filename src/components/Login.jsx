import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Mock login validation (replace this with your actual logic)
    if (email === "test@example.com" && password === "password") {
      alert("Login successful!");
      navigate("/home"); // Navigate to '/home' after successful login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Log In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md"
          >
            Log In
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm font-medium mt-4">{error}</div>
        )}

        <p className="text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Login = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Initialize navigate function

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     try {
//       const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         // Save the JWT token in localStorage
//         localStorage.setItem("authToken", data.token);
//         alert("Login successful!");
//         navigate("/home"); // Navigate to '/home' after successful login
//       } else {
//         setError(data.message); // Set the error message
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Log In</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="text-left">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           <div className="text-left">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md"
//           >
//             Log In
//           </button>
//         </form>

//         {/* Error Message */}
//         {error && (
//           <div className="text-red-600 text-sm font-medium mt-4">{error}</div>
//         )}

//         <p className="text-gray-600 text-sm mt-6">
//           Don't have an account?{" "}
//           <a
//             href="/signup"
//             className="text-blue-500 font-semibold hover:underline"
//           >
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
