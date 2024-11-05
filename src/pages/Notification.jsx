/* eslint-disable no-unused-vars */
import React from 'react'
import { closeIcon, sunIcon } from '/public/icons/Icons';
import notificationData from '../api/notificationData.json'


const Notification = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-screen py-8">
        <h1 className="text-3xl font-extrabold mb-6 rounded text-slate-800 dark:text-slate-100">
          Notifications
        </h1>

        <div className="flex flex-col container px-4 md:px-8 lg:px-32 space-y-4">
          {/* Example Notification 1 */}
          {notificationData.map((CurElem) => {
            return (
              <div key={CurElem.notifTitle + 1} className="p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md rounded-md text-sm min-w-72 flex-1">

                <h2 className={CurElem.status}>{CurElem.notifStatus}</h2>
                <i className='bg-slate-200 flex dark:bg-slate-600 h-[1px] my-2'></i>

                <p className="text-slate-500 dark:text-slate-200 font-bold mt-1">
                  {CurElem.notifTitle}
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  {CurElem.notifDesc}
                </p>

                <div className='flex justify-between items-center mt-4'>
                  <p className="text-[12px] text-slate-400 dark:text-slate-500">Posted on : {CurElem.notifDate}</p>
                  <div className='group'>
                    <p className='btn-green flex text-center text-[12px] md:text-sm group-active:hidden px-5 py-2 '>Mark Read</p>
                    <img src={closeIcon} alt="" className='btn-green hidden group-active:flex p-[6px] ' />
                  </div>
                </div>

              </div>

            )
          })}

          {/* Example Notification 2 */}
        </div>
      </div>
    </>
  )
}

export default Notification
