/* eslint-disable no-unused-vars */
import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[800px] w-screen p-8 bg-white dark:bg-slate-900">
        <h1 className="text-4xl font-extrabold mb-6">
          About Us
        </h1>
        <p className="text-slate-500 dark:text-slate-300  text-center max-w-4xl leading-relaxed">
          At <strong>CodeWithTechnis</strong>, we are passionate about empowering individuals and businesses 
          through innovative tech solutions. Our mission is to create a community where knowledge, resources, 
          and opportunities in the tech world are easily accessible to everyone. Whether you're a budding 
          developer, an experienced tech enthusiast, or a business seeking to harness the power of technology, 
          our platform offers a range of tools and educational resources designed to help you succeed.
        </p>
        <p className="text-slate-500 dark:text-slate-300  text-center max-w-4xl leading-relaxed mt-4">
          From curated resources to expert-led training sessions, we provide a space for continuous learning 
          and growth. Our store features both free and premium products, ensuring that everyone has access to 
          the tools they need, regardless of budget. We believe in building a strong, supportive community 
          where collaboration and sharing knowledge can propel everyone forward.
        </p>
        <p className="text-slate-500 dark:text-slate-300  text-center max-w-4xl leading-relaxed mt-4">
          At CodeWithTechnis, we don’t just teach tech — we build futures.
        </p>
      </div>
    </>
  )
}

export default About
