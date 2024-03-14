import React from 'react'

const About = () => {
  return (
    <div
      name="About"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am frontend Developer with 2+ years of experience in web
          design and development across diverse industries. Excellent problem-solving and communication
          skills, Continuous learning and adaptation to emerging technologies in the web development
          landscape, Proficient in creating scalable APIs, user interfaces and testing code.
        </p>
        <br />
        <p className='text-xl'>I have great experience in HTML, CSS, JavaScript and React.js. I am currently working in kfaqs infotech pvt ltd as frontend developer.</p>
      </div>
    </div>
  )
}

export default About
