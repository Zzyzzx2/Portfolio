import React from 'react'
import Typewriter from "typewriter-effect";

export default function Header() {
  
  return (
    <>
      <div className="flex">
        <div
          className="flex flex-col rounded-lg bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-2xl dark:bg-neutral-700 md:max-w-5xl md:flex-row">
          <div className="flex flex-col justify-start p-6">
            <h1
              className="mb-2 text-8xl font-medium text-white text-center">
              Hi 👋 I'm Rahan,
            </h1>
            <div className="mb-10"></div>
            <div className="mb-4 text-7xl text-white text-center">
                <Typewriter
                options={{
                    autoStart: true,
                    loop:true,
                    delay: 40,
                    strings:[
                        "I'm a Competitive Programmer",
                        "I'm a MERN Stack Developer",
                        "I'm an AI/ML Enthusiast"
                    ],
                }}/>
            </div>
            <p className="text-white text-center">
              
            </p>
            {/* <button type='button' className="inline-block mt-5 mb-5 lg:mb-5 lg:mt-5 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Thanks</button> */}
          </div>
        </div>
      </div>
    </>
  )
}