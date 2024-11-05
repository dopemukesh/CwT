/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Notification from '/icons/notification-icon.svg'
import { notifIcon, menuIcon, sunIcon } from '/public/icons/Icons';
import { logoLight, logoDark } from '/public/logo/Logo';


const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.documentElement.classList.toggle('dark', !darkMode);
        localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
      };
      
      useEffect(() => {
        const userTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const darkModeEnabled = userTheme === 'dark' || (!userTheme && prefersDarkMode);
      
        if (darkModeEnabled) {
          setDarkMode(true);
          document.documentElement.classList.add('dark');
        } else {
          setDarkMode(false);
          document.documentElement.classList.remove('dark');
        }
      }, []);
      


    return (
        <>
            <div id="header"
                className="bg-slate-100 sticky top-0 z-50 dark:bg-slate-800 py-2 flex justify-center items-center">
                <div id="navlinks"
                    className="flex container px-4 md:px-8 lg:px-32 justify-between font-medium text-slate-500 dark:text-slate-300">
                    <div id="leftNav"
                        className="lg:flex hidden gap-8 items-center">
                        <Link to='/' className="hover:text-yellow-500 dark:hover:text-yellow-500">Home</Link>
                        <Link to='/members' className="hover:text-yellow-500 dark:hover:text-yellow-500">Members</Link>
                        <Link to='/resources' className="hover:text-yellow-500 dark:hover:text-yellow-500">Resources</Link>
                    </div>
                    <div id="logo"
                        className="flex gap-8 items-center text-2xl text-yellow-500 font-extrabold">
                        <Link to='/'>
                            <img src={logoLight} alt='Light Mode Logo' className='w-8 lg:w-16 hidden dark:block' />
                            <img src={logoDark} alt='Dark Mode Logo' className='w-8 lg:w-16 block dark:hidden' />
                        </Link>
                    </div>
                    <div id="rightNav"
                        className="flex gap-8 items-center ">
                        <div className='flex items-center  gap-2 bg-slate-200 dark:bg-slate-700/50 rounded-lg border border-slate-300 dark:border-slate-700'>
                            <Link to='/notification' className='flex hover:bg-slate-300 dark:hover:bg-slate-700 p-2 rounded-md'>
                                <img src={notifIcon} alt="notification" />
                            </Link>
                            <img onClick={toggleDarkMode} src={sunIcon} alt="sunIcon" className='flex w-[34px] hover:bg-slate-300 dark:hover:bg-slate-700 p-2 rounded-md cursor-pointer' />
                            <img src={menuIcon} alt="menuIcon" className='flex lg:hidden w-[34px] hover:bg-slate-300 dark:hover:bg-slate-700 p-2 rounded-md cursor-pointer' />
                        </div>
                        <div className='lg:flex hidden gap-8'>
                            <Link to='/store' className="hover:text-yellow-500 dark:hover:text-yellow-500">Store</Link>
                            <Link to='/about' className="hover:text-yellow-500 dark:hover:text-yellow-500">About Us</Link>
                            <Link to='/join-us' className="hover:text-yellow-500 dark:hover:text-yellow-500">Join Us</Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header