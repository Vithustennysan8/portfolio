import './App.css'
import profile from './assets/profile.png';
import react from './assets/react.svg';
import python from './assets/python.svg';
import git from './assets/git.svg';
import github from './assets/github.svg';
import java from './assets/java.svg';
import redux from './assets/redux.svg';
import javascript from './assets/javascript.svg';
import html from './assets/html.svg';
import css from './assets/css.svg';
import bootstrap from './assets/bootstrap.svg';
import tailwindcss from './assets/tailwindcss.svg';
import Arduino from './assets/Arduino.svg';
import C from './assets/C.svg';
import mysql from './assets/mysql.svg';
import one from './assets/project1/1.png';
import two from './assets/project1/2.png';
import three from './assets/project1/3.png';
import four from './assets/project1/4.png';
import five from './assets/project1/5.png';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

const TechCard = ({image, name}) => {
  return (
    <>
      <div className='w-20 h-20 md:w-28 md:h-28 p-2 bg-gray-900 rounded-lg' data-aos="zoom-in-down">
        <img src={image} className='w-full h-full' alt="" />
        <p className='text-center font-semibold mt-1'>{name}</p>
      </div>
    </>
  )
}

  const FloatingNav = () => {
    return(
      <div className='bg-neutral-900 w-fit md:px-12 px-2 md:h-12 h-16 rounded-xl fixed bottom-8 bg-opacity-85 z-10 left-1/2 -translate-x-1/2'>
        <ul className='flex h-full md:gap-7 text-green-400 gap-3 font-bold justify-center items-center'>
          <li><a href='#' className=' hover:text-gray-400'>Home</a></li>
          <li><a href='#about' className=' hover:text-gray-400'>About</a></li>
          <li><a href='#techs' className=' hover:text-gray-400'>Techs</a></li>
          <li><a href='#projects' className=' hover:text-gray-400'>Projects</a></li>
          <li><a href='#contact' className=' hover:text-gray-400'>Contact</a></li>
        </ul>
      </div>
    )
  }

function App() {

  const [showNav, setShowNav] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }

  window.addEventListener("scroll", onScroll);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
    { showNav && <FloatingNav/>}

    <div className=' text-white md:px-4 px-3 md:w-11/12 mx-auto'>

      {/* ----- HEADER -------- */}
      <header className='flex justify-between items-center mt-2 py-1 mb-9 bg-transparent  text-gray-100'>
          <h2 className='text-3xl md:text-4xl font-bold'><span className='text-green-400'>Vithu</span>shan</h2>
          <nav className='hidden md:block'>
            <ul className='flex md:gap-4 gap-1 font-semibold'>
              <li><a href='#' className='text-green-300 hover:text-gray-400'>Home</a></li>
              <li><a href='#about' className='text-green-300 hover:text-gray-400'>About</a></li>
              <li><a href='#techs' className='text-green-300 hover:text-gray-400'>Techs</a></li>
              <li><a href='#projects' className='text-green-300 hover:text-gray-400'>Projects</a></li>
              <li><a href='#contact' className='text-green-300 hover:text-gray-400'>Contact</a></li>
            </ul>
          </nav>
      </header>

      {/* ------ BANNER ------- */}
      <div className='flex sm:flex-row flex-col items-center md:gap-12 gap-8 mb-24'>

        <div className='md:w-1/2 sm:w-2/5' data-aos="fade-right">
          <img className='w-3/4 md:w-4/5 mx-auto drop-shadow-2xl border-b-4 border-gray-500 profile' src={profile} alt="profile pic for banner" />
        </div>

        <div className='md:w-1/2 sm:w-3/5' data-aos="fade-left">
          <h1 className='text-2xl md:text-3xl text-gray-400'>Hi, I am <br />
            <span className='text-5xl lg:text-6xl md:text-4xl font-bold text-gray-200'> Vithushan E.T.L.</span>
          </h1>
          <p className='text-sky-500 font-bold text-2xl mt-1'>Computer Engineer</p>
          <p className='text-base lg:text-lg text-gray-300 mt-4'>I'm a <span className='text-green-400'> Computer Engineering undergraduate</span> of University of Peradeniya.
            Currently I am focusing on 
            <span className='text-green-400'> Web Development</span> as my area of interest.
          </p>
          <button onClick={"/"} className='bg-slate-700 rounded-md py-2 px-3 mt-4 mr-4 font-semibold'><a href="#about">About me</a></button>
          <button className='bg-sky-700 rounded-md py-2 px-3 mt-4 font-semibold'><a href='/Vithushan_CV.pdf' download={true}>Download CV</a></button>

          <div className='flex mt-8 h-8 gap-5'>
            <a target="_blank" href="https://www.linkedin.com/in/vithushan-e-t-l-265a072a1/" className='text-gray-400 hover:text-green-400'>
              <img className='h-full' src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
            </a>
            <a target="_blank" href="https://github.com/Vithustennysan">
              <img className='h-full' src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
            </a>
            <a target="_blank" href="mailto:vithustennysan20@gmail.com">
              <img className='h-full' src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" />
            </a>
            <a target="_blank" href="https://www.instagram.com/vithus_tennysan?igsh=dzhrNzYwaXJ6OTNl">
              <img className='h-full' src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* ------ ABOUT ------- */}
      <div id='about' className='mb-24 bg-transparent bg-white rounded-lg bg-opacity-10 md:px-12 px-3 py-8 md:flex md:items-center'>
        <h2 className='text-center text-3xl md:text-4xl mb-6 md:w-1/3 font-bold'>About me</h2>

        <div className='md:w-2/3 mx-auto md:px-16 px-3 text-gray-300' data-aos="fade-up">
          <p  >I am Vithushan E.T.L. from jaffna. From my childhood
          I was fascinated about the world of technology. I studied at <span className='text-green-400'>Jaffna Central College</span> from grade 1 to Advanced level. Currently I am studying <span className='text-green-400'>Computer Engineering in University of Peradeniya. </span>
           I am third year student. I have been working on small projects and learning new technologies since then.
          </p>
          <br />
          <p>I am a
          <span className='text-green-400'> Fresher</span> with a strong passion
          for <span className='text-green-400'>Web Development</span>. I am currently focusing on building web applications using React, Springboot, Mysql.
          I am exited to work on a real world application and contribute to the tech community.
          </p><br />

            <p className='text-green-500 text-base font-bold'>I have completed some online coureses to gain knowledge on my own</p>
          <ul className='text-sm text-cyan-400 list-disc pl-8'>
            <li>Web development - <span className='text-violet-400'>University of Moratuwa</span></li>
            <li>Python - <span className='text-violet-400'>HackerRank, Coursera</span></li>
            <li>Sql - <span className='text-violet-400'>SoloLearn</span></li>
            <li>Html - <span className='text-violet-400'>SoloLearn</span></li>
          <a href="https://www.linkedin.com/in/vithushan-e-t-l-265a072a1/" className='hover:text-red-500'>for more....</a>
          </ul>
        </div>
      </div>

      {/* ------ TECHS ------- */}
      <div className='mb-24' id='techs'>
        <h2 className='text-center text-3xl md:text-4xl mb-6 font-bold' >Techs</h2>
        <div className='flex gap-7 md:w-3/4 m-auto justify-center flex-wrap'>
          <TechCard image={react} name={"React"}/>
          <TechCard image={python} name={"Python"}/>
          <TechCard image={git} name={"Git"}/>
          <TechCard image={github} name={"Github"}/>
          <TechCard image={java} name={"Java"}/>
          <TechCard image={redux} name={"Redux"}/>
          <TechCard image={javascript} name={"JavaScript"}/>
          <TechCard image={html} name={"Html"}/>
          <TechCard image={css} name={"css"}/>
          <TechCard image={tailwindcss} name={"TailwindCss"}/>
          <TechCard image={bootstrap} name={"Bootstrap"}/>
          <TechCard image={C} name={"C"}/>
          <TechCard image={mysql} name={"MySql"}/>
          <TechCard image={Arduino} name={"Arduino"}/>
        </div>
      </div>

      <div id='projects' className='border-0 border-gray-400 rounded-xl py-4 px-2'>
        <h2 className='text-center text-3xl md:text-4xl mb-6 font-bold'>Projects</h2>

        <div className='md:flex p-3 gap-3 bg-white bg-opacity-10 rounded-lg mb-5' data-aos="fade-left">
          <div className='md:w-1/2'>
            <img src={one} alt="" />
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-2xl mb-4 text-cyan-400 text-center font-semibold'>Leave and Transfer management System</h3>
            <p className='text-gray-200'>This is a project about <span className='text-red-500'>Non-academic staff leave and tranfer management 
              system</span> for University of Peradeniya. This is an second year final group project of 4 members.
              The Leave Management System (LMS) is designed to streamline and automate the leave 
              application and approval process for university staff. This system will replace manual processes 
              with a centralized, online platform to enhance efficiency, accuracy, and transparency in 
              managing leave requests. The system will be accessible to all staff members and will provide a 
              user-friendly interface for submitting and tracking leave requests and Transfer management.
            </p><br />

            <p className='text-emerald-400 text-xl'>Technologies Used</p>
            <ul className='text-gray-300 list-disc pl-8'>
              <li>Frontend: React</li>
              <li>Backend: Springboot</li>
              <li>Database: Mysql</li>
              <li>Tools: Git, GitHub</li>
            </ul>
          </div>
        </div>

        <div className='md:flex p-3 gap-3 bg-white bg-opacity-10 rounded-lg mb-5' data-aos="fade-right">
          <div className='md:w-1/2'>
            <img src={two} alt="" />
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-2xl mb-4 text-cyan-400 text-center font-semibold'>DEAR</h3>
            <p className='text-gray-300'>This is a project about the <span className='text-red-500'>Data Engineering and Research group</span> of University 
              of Peradeniya. This is the main page of all of the projects. If someone wants to volunteer they can get the 
              details about the exiting projects and professors working on it.
              This is a static website.
            </p><br />
            <p className='text-emerald-400 text-xl'>Technologies Used</p>
            <ul className='list-disc pl-8'>
              <li>Html</li>
              <li>css</li>
              <li>Javascript</li>
              <li>Tools: Git, GitHub</li>
            </ul>
          </div>
        </div>
{/* 
        <h2 className='text-3xl mb-4 text-center font-semibold mt-8'>Some of the basic websites</h2>
        <div className='flex md:flex-row flex-col mb-4 gap-3'>
          <div className=' bg-white bg-opacity-10 rounded-lg p-2' data-aos="fade-down-right">
            <h3 className='text-2xl mb-4 text-cyan-400 text-center font-semibold'>Pepsi</h3>
            <img src={three} alt="" className='mb-2'/>
            <p>This is a project about Pepsi website of my creation. 
              This is a static website using html, css, Javascript. </p>
          </div>
          <div className=' bg-white bg-opacity-10 rounded-lg p-2' data-aos="flip-up">
            <h3 className='text-2xl mb-4 text-cyan-400 text-center font-semibold'>BookNotes</h3>
            <img src={four} alt="" className='mb-2'/>
            <p>This is a project about taking short notes instanlty.
              This is a static website using html, css, Javascript. </p>
          </div>
          <div className=' bg-white bg-opacity-10 rounded-lg p-2' data-aos="fade-down-left" >
            <h3 className='text-2xl mb-4 text-cyan-400 text-center font-semibold'>Calculater</h3>
            <img src={five} alt="" className='mb-2'/>
            <p>This is a project about Calculater.
              It has basic functionalities. 
              This is a static website using html, css, Javascript.
               </p>
          </div>

        </div> */}
      </div>

      <div className='mb-12' id='contact'>
        <h2 className='text-center text-3xl md:text-4xl mb-6 font-bold'>Contact</h2>
        <div className='gap-3 bg-blue-950 rounded-lg px-4 py-6'>
          <p className='text-white text-xl text-center w-full font-bold mb-5'>If you want to contact me you can use the
          following details. I will be happy to help you.</p>
          <div className=' w-fit mx-auto'>
            <div className='flex items-center gap-3 w-300 mb-3'>
              <img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" className='w-16' alt="mail-icon" />
              <a href='mailto:vithustennysan20@gmail.com' className='text-gray-300 font-semibold hover:text-white'>vithustennysan20@gmail.com</a>
            </div>
            <div className='flex items-center gap-3'>
              <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" className='w-16' alt="phone-icon" />
              <p className='text-gray-300 font-semibold hover:text-white'>0760832397</p>
            </div>

          </div>
        </div>
      </div>

    </div>

    <footer className='h-11 bg-neutral-800 flex items-center justify-center text-gray-200 font-semibold'>
      @Vithushan E.T.L. 2024
    </footer>
      
    </>
  )
} 

export default App
