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