import React from 'react'

export default function About() {
    return (
        <>
            <section id='about'>
                <div className="flex">
                    <div className="w-screen h-auto">
                        <div className="w-3/6 m-auto">
                            <h1 className='text-white text-center text-4xl'>About Me</h1>
                            <p className='text-white text-center mt-5'>Hi, my name is Rahan Shankar and I'm from Chennai, Tamil Nadu India. <br></br> <br></br>

I am currently pursuing an undergraduate degree in Computer Science and Engineering with a Specilization in AI and ML at Vellore Institute of Technology, Chennai.
<br></br> <br></br>
As a Full-Stack developer, I enjoy tackling new challenges and continuously expanding my skillset.

I am very active in the Competitive Programming world and actively participate in discussions with my peers as well as solving Problems

<br></br> <br></br>
I have a passion for working with Node.js, MongoDB, and modern Javascript libraries and frameworks like React.js
</p>
                        </div>
                    </div>
                </div>
                <div className="grid-cols-1 lg:grid-cols-4">
                    <div className="block justify-around space-y-10 space-x-0 mt-32 lg:flex lg:space-x-10 lg:mr-4 lg:ml-4 lg:space-y-0">
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'><i class="fa-brands fa-js"></i></h1>
                            <p className='text-4xl p-5 text-white'>Netflix Clone</p>
                            <p className='p-5 text-white'>HTML and CSS to mimick the Netflix Homepage and also a Responsive Design</p>
                            <a href="https://github.com/Zzyzzx2/Netflix-Clone-Website-CSS-HTML" target='_blank' rel="noopener noreferrer"><button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Github Link</button></a>
                        </div>
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'><i class="fa-brands fa-python"></i></h1>
                            <p className='text-4xl p-5 text-white'>To-Do-List</p>
                            <p className='p-5 text-white'>ReactJS to build a To Do List App that will keep you on track. Also Uses Internal Memory to be Persistent.</p>
                            <a href="https://github.com/Zzyzzx2/To-Do-list-" target='_blank' rel="noopener noreferrer"><button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Github Link</button></a>
                        </div>
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'><i class="fa-brands fa-html5"></i></h1>
                            <p className='text-4xl p-5 text-white'>Weather App</p>
                            <p className='p-5 text-white'>Tailwind, Bootstrap and ReactJS along with OpenWeatherAPI to get Current Weather in any city</p>
                            <a href="https://github.com/Zzyzzx2/Weather-App" target='_blank' rel="noopener noreferrer"><button type='button'  className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Github Link</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}