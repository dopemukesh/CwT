/* eslint-disable no-unused-vars */
// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Layout ko import karein
import Home from './pages/Home';
import Members from './pages/Member';
import Notification from './pages/Notification';
import About from './pages/About';
import Store from './pages/Store';
import Resources from './pages/Resources';
import JoinUs from './pages/Joinus';

const App = () => {
  return (
    <Layout> {/* Layout ko yahan wrap karein */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/join-us' element={<JoinUs />} />
      </Routes>
    </Layout>
  );
};

export default App;




















// import { useState, useRef } from 'react';

// export default function App() {
//   const [age, setAge] = useState(null); // Initialize state to store age
//   const ageInputRef = useRef(); // Reference to the input element

//   const handleSubmit = () => {
//     const enteredAge = ageInputRef.current.value; // Get the value from input
//     setAge(Number(enteredAge)); // Update the age state
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold underline mb-8">
//         Hello world!
//       </h1>

//       <input type="text" id="age" ref={ageInputRef} placeholder="Enter age..."  className='border-b-2 mx-4 outline-none'/>
//       <input type="submit" value="Submit" onClick={handleSubmit} className='bg-violet-500 text-white px-2 rounded' />

//       <div>
//         <h2 className='mx-4'>{age !== null && age >= 18 ? "You can vote" : "Tum abhi chimkandi ho"}</h2>
//       </div>
//     </>
//   );
// }
