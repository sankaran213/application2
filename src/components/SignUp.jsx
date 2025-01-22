import React, { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Mock signup validation (replace this with actual logic)
    if (email && password.length >= 6) {
      alert("Sign up successful!");
    } else {
      setError("Password must be at least 6 characters long.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-teal-600 mb-6">Sign Up</h1>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm font-medium mt-4">{error}</div>
        )}

        <p className="text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-teal-500 font-semibold hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Signup = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Initialize navigate function

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     try {
//       const response = await fetch("http://localhost:5000/api/users/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         alert("Sign up successful! You can now log in.");
//         navigate("/login"); // Redirect to login page after signup
//       } else {
//         setError(data.message); // Set the error message
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold text-teal-600 mb-6">Sign Up</h1>
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
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 shadow-md"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Error Message */}
//         {error && (
//           <div className="text-red-600 text-sm font-medium mt-4">{error}</div>
//         )}

//         <p className="text-gray-600 text-sm mt-6">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-teal-500 font-semibold hover:underline"
//           >
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
