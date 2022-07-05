// import React, { useState } from "react";
// import { validateEmail } from "../../utils/helpers";
// // import "./Contact.css";

// function Contact() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const { name, email, message } = formState;

//   const handleChange = (event) => {
//     // todo if error checking do it here
//     if (event.target.name === "email") {
//       const isValid = validateEmail(event.target.value);
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         if (!event.target.value.length) {
//           setErrorMessage(`${event.target.name} is required.`);
//         } else {
//           setErrorMessage("");
//         }
//       }
//     }

//     if (!errorMessage) {
//       setFormState({ ...formState, [event.target.name]: event.target.value });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // todo error checking if needed
//     console.log("submitted");
//   };

//   return (
//     <section>
//       <h1 id="contact">Contact Me</h1>
//       <form id="todo" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email address: </label>
//           <input
//             type="email"
//             name="email"
//             defaultValue={email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message: </label>
//           <input type="text" name="message" defaultValue={name} />
//           <textarea name="" rows="" defaultValue="" onChange="" />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text"></p>
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;
