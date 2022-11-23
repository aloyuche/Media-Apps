// import React, { useState } from "react";
// import Cookie from "universal-cookie";
// import axios from "axios";

// const cookies = new Cookie();
// const Auth = () => {
//   const [isSignup, setIsSignup] = useState();
//   const [form, setForm] = useState("initialState");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { username, password, phoneNumber, avatarURL } = form;

//     // const URL = "https://localhost:5000/auth";
//     // const URL = 'https://medical-pager.herokuapp.com/auth';

//     const {
//       data: { token, userId, hashedPassword, fullName },
//     } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
//       username,
//       password,
//       fullName: form.fullName,
//       phoneNumber,
//       avatarURL,
//     });

//     cookies.set("token", token);
//     cookies.set("username", username);
//     cookies.set("fullName", fullName);
//     cookies.set("userId", userId);

//     if (isSignup) {
//       cookies.set("phoneNumber", phoneNumber);
//       cookies.set("avatarURL", avatarURL);
//       cookies.set("hashedPassword", hashedPassword);
//     }

//     // window.location.reload();
//   };

//   const switchMode = () => {
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//   };

//   return (
//     <div className="w-full pt-6 h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl mt-6 py-2 font-bold inline border-b-4 border-gray-500">
//             Authentication
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>
//         <div className="flex justify-center items-center">
//           <p>{isSignup ? "Sign Up" : "Sign In"}</p>
//           <form
//             onSubmit={handleSubmit}
//             className=" flex flex-col w-full md:w-1/2"
//             method="POST"
//           >
//             {isSignup && (
//               <div className="w-full p-2 px-3 ">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                   name="fullName"
//                   type="text"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   required
//                   className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                 />
//               </div>
//             )}
//             <div className="w-fit p-2 border-b-2 round-md">
//               <label htmlFor="username">Username</label>
//               <input
//                 name="username"
//                 type="text"
//                 placeholder="Username"
//                 onChange={handleChange}
//                 required
//                 className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               />
//             </div>
//             {isSignup && (
//               <div className="w-fit p-2 border-b-2 round-md">
//                 <label htmlFor="phoneNumber">Phone Number</label>
//                 <input
//                   name="phoneNumber"
//                   type="text"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   required
//                   className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                 />
//               </div>
//             )}
//             {isSignup && (
//               <div className="w-fit p-2 round-md">
//                 <label htmlFor="avatarURL">Avatar URL</label>
//                 <input
//                   name="avatarURL"
//                   type="text"
//                   placeholder="Avatar URL"
//                   onChange={handleChange}
//                   required
//                   className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                 />
//               </div>
//             )}
//             <div className="w-fit p-2  round-md">
//               <label htmlFor="password">Password</label>
//               <input
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//                 className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               />
//             </div>
//             {isSignup && (
//               <div className="w-fit p-2  round-md">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   name="confirmPassword"
//                   type="password"
//                   placeholder="Confirm Password"
//                   onChange={handleChange}
//                   required
//                   className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                 />
//               </div>
//             )}
//             <div className="text-white w-fit py-3 px-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
//               <button>{isSignup ? "Sign Up" : "Sign In"}</button>
//             </div>
//           </form>
//           <div className="auth__form-container_fields-account">
//             <p>
//               {isSignup ? "Already have an account?" : "Don't have an account?"}
//               <span onClick={switchMode}>
//                 {isSignup ? "Sign In" : "Sign Up"}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
