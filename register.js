

// import React, { useState } from 'react';
// import './style.css';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import errors from "errors";

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();


//   const handleChange = (e) => {
//     const { name, value,handleSubmit, formState: { errors }} = e.target;
//     if (name === 'name') setName(value);
//     if (name === 'email') setEmail(value);
//     if (name === 'password') setPassword(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`User Registered!\nName: ${name}\nEmail: ${email}`);
//     navigate('/login ');
//   };

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post("http://localhost:8000/register.php", data);
//       setPassword(response.data.message);
//     } catch (error) {
//       console.error("There was an error registering:", error);
      
//     }
//   };

//   return (
//     <div className='abc'>
//       <br /><br />
//       <h2>Registration Form</h2>
//       <br />
//       <div className="register-form">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={handleChange}
//               required
//             />
//             {errors.name && <p>{errors.name.message}</p>}
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               required
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//               {register("password", {
//                 required: "Password is required",
//                 minLength: { value: 6, message: "Password must be at least 6 characters long" })}
//             />
//             {errors.password && <p>{errors.password.message}</p>}
//           </div>
//           <a
//             href="#"
//             onClick={() => alert("Forgot password clicked!")}
//             className="forgot-password-link"
//           >
//             Forgot Password?
//           </a> 
//           <br />
//           <button type="submit" >Register</button>
//           <a href="#" onClick={() => navigate('/login')} className=" def" > Sign in here?</a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from 'react';
// import './style.css';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { useForm } from "react-hook-form"; // Import useForm hook

// const RegistrationForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm for validation
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       // Send data to backend
//       const response = await axios.POST("register.php", data);
//       setMessage(response.data.message);
//       alert("Registration successful! Welcome, " + data.name);

//       // Redirect to login page after successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error("There was an error registering:", error);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className='abc'>
//       <br /><br />
//       <h2>Registration Form</h2>
//       <br />
//       <div className="register-form">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               {...register("name", { required: "Name is required" })} // Register name with validation
//             />
//             {errors.name && <p>{errors.name.message}</p>} {/* Display validation error for name */}
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
//                   message: "Enter a valid email address"
//                 } })}
//             />
//             {errors.email && <p>{errors.email.message}</p>} {/* Display validation error for email */}
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: { value: 6, message: "Password must be at least 6 characters long" }
//               })} // Register password with validation
//             />
//             {errors.password && <p>{errors.password.message}</p>} {/* Display validation error for password */}
//           </div>
//           <a
//             href="#"
//             onClick={() => alert("Forgot password clicked!")}
//             className="forgot-password-link"
//           >
//             Forgot Password?
//           </a>
//           <br />
//           <button type="submit" onClick={() => navigate('/login')}>Register</button>
//           <a href="#" onClick={() => navigate('/login')} className="def">Sign in here?</a>
//         </form>
//       </div>
//       {message && <p>{message}</p>} {/* Display success or error message */}
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'; // Import useForm hook

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm for validation
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send data to backend (fixed axios method from POST to post)
      const response = await axios.post('http://localhost/API/register.php', data); // Make sure to provide full URL if using local server
      
      setMessage(response.data.message); // Display response message

      if (response.data.message === "User registered successfully.") {
        alert(`Registration successful! Welcome, ${data.name}`);
        navigate('/login');
      } else {
        alert('Registration failed: ' + response.data.message);
      }

    } catch (error) {
      console.error('There was an error registering:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="abc">
      <br /><br />
      <h2>Registration Form</h2>
      <br />
      <div className="register-form">
        <form >
          <div>
            <label>name:</label>
            <input
              type="text"
              name="name"
              {...register('name', { required: 'Name is required' })} // Register name with validation
            />
            {errors.name && <p>{errors.name.message}</p>} {/* Display validation error for name */}
          </div>
          <div>
            <label>email:</label>
            <input
              type="email"
              name="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>} {/* Display validation error for email */}
          </div>
          <div>
            <label>password:</label>
            <input
              type="password"
              name="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters long' },
              })} // Register password with validation
            />
            {errors.password && <p>{errors.password.message}</p>} {/* Display validation error for password */}
          </div>
          <a
            href="#"
            onClick={() => alert('Forgot password clicked!')}
            className="forgot-password-link"
          >
            Forgot Password?
          </a>
          <br />
          <button type="submit" onSubmit={handleSubmit(onSubmit)}>Register</button>
          <a href="#" onClick={() => navigate('/login')} className="def">Sign in here?</a>
        </form>
      </div>
      {message && <p>{message}</p>} {/* Display success or error message */}
    </div>
  );
};

export default RegistrationForm;
