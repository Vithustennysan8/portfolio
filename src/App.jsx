import './App.css';
import CV from "./assets/cv/Vithushan_CV.pdf";
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
import tailwindcss from './assets/tailwindcss.svg';
import Arduino from './assets/Arduino.svg';
import C from './assets/C.svg';
import mysql from './assets/mysql.svg';
import GreenHouse from './assets/project1/GreenHouse.png';
import lms from './assets/project1/lms.png';
import signLanguage from './assets/project1/signLanguage.png';
import ids from './assets/project1/ids.jpg';
import Dear from './assets/project1/DEAR.png';
import ibm_container from './assets/certs/ibm_container.png';
import aws from './assets/certs/aws.png';
import ibm_cloud from './assets/certs/ibm_cloud.png';
import web_development from './assets/certs/web_development.png';
import python_cert from './assets/certs/python.png';
import uiux from './assets/certs/uiux.jpg';
import react_native from './assets/react-native.svg';
import docker from './assets/docker.png';
import mongodb from './assets/mongodb.svg';
import AWS from './assets/aws.png';
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ContactForm from './contactForm';
import spring_boot from './assets/springboot.svg';

const TechCard = ({ image, name, delay = 0 }) => (
  <div
    className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:scale-105 hover:border-cyan-500/25 hover:bg-cyan-500/5 hover:shadow-glow-sm"
    data-aos="zoom-in-down"
    data-aos-delay={delay}
  >
    <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-2">
      <img src={image} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" alt={name} />
    </div>
    <span className="text-sm font-medium text-zinc-400 group-hover:text-cyan-300/90 transition-colors">{name}</span>
  </div>
);

TechCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const SECTION_IDS = ['home', 'about', 'techs', 'projects', 'certifications', 'contact'];

const FloatingNav = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop - 120 <= scrollY) {
          setActive(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-2xl bg-zinc-900/90 border border-white/[0.08] backdrop-blur-xl shadow-xl">
      {SECTION_IDS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`px-1 md:px-4 py-2 rounded-xl md:text-sm text-xs font-medium capitalize transition-all duration-200 ${
            active === id
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {id === 'home' ? 'Home' : id}
        </a>
      ))}
    </nav>
  );
};

// Modern project card with visible styling and visit link
function ProjectCard({
  image,
  title,
  description,
  techs = [],
  link,
  link2,
  dataAos,
}) {
  const visibleTechs = techs.slice(0, 4);
  const extraCount = Math.max(0, techs.length - visibleTechs.length);

  return (
    <article
      data-aos={dataAos}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
    >
      {/* Gradient frame */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-teal-400/10" />
      </div>

      {/* Spotlight hover */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* Title + chips */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mt-3 flex flex-wrap gap-2">
            {visibleTechs.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200"
              >
                {t}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                +{extraCount} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold text-cyan-500 tracking-tight">
            {title}
        </h3>

        <p className="text-sm text-zinc-300">
          {description}
        </p>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/15"
            >
              see more
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-500">
              Demo coming soon
            </span>
          )}
          {link2 && (
            <a
              href={link2}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/15"
            >
              see more
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}

          {/* {repo!='' && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center cursor-pointer gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/7"
            >
              GitHub
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.22 9.2 7.69 10.7.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.01 1.72 2.65 1.22 3.3.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.97 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.46 3.12-1.16 3.12-1.16.61 1.54.23 2.69.11 2.97.72.79 1.16 1.8 1.16 3.03 0 4.34-2.63 5.3-5.14 5.58.4.34.76 1.03.76 2.08v3.08c0 .3.2.64.78.53 4.46-1.51 7.68-5.72 7.68-10.7C23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>
          )} */}
        </div>
      </div>
    </article>
  );
}


ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
  link2: PropTypes.string,
  dataAos: PropTypes.string,
};

// Add or remove projects here — set `link` to your live demo or repo URL
const PROJECTS = [
  {
    image: GreenHouse,
    title: 'Greenhouse Automation System',
    description:
      'IoT-based autonomous greenhouse system with real-time monitoring and automated control of environmental parameters. Includes cloud-integrated backend, mobile application, and embedded hardware for smart agriculture use cases.',
    techs: ['Spring Boot', 'AWS IoT', 'MQTT', 'WebSockets', 'React Native', 'MySQL', 'ESP32'],
    link: 'https://cepdnaclk.github.io/e20-3yp-Green-House-Automation/',
    status: 'Ongoing',
  },
  {
    image: lms,
    title: 'Leave & Transfer Management System',
    description:
      'Full-stack management system developed for the University of Peradeniya to streamline non-academic staff leave and transfer workflows. Replaced manual processes with configurable approval pipelines and role-based dashboards.',
    techs: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Git'],
    link: 'https://github.com/Vithustennysan8/Non-academic-staff',
    link2: 'https://github.com/Vithustennysan8/Non-academic-staff-BackEnd',
    status: 'Completed',
  },
  {
    image: signLanguage,
    title: 'Sign Language Recognition Platform',
    description:
      'Real-time sign language recognition platform supporting static and dynamic hand gestures. Uses deep learning models for gesture classification and provides an interactive web interface for live recognition.',
    techs: ['React', 'Flask', 'TensorFlow', 'OpenCV', 'LSTM'],
    link: 'https://github.com/Vithustennysan8/Sign-Language-Recognition',
    status: 'Completed',
  },
  {
    image: ids,
    title: 'Hierarchical Hybrid Intrusion Detection System',
    description:
      'Ongoing research project focused on detecting zero-day and unknown cyber attacks using a hierarchical hybrid IDS architecture combining anomaly detection, supervised learning, and active learning techniques.',
    techs: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Wireshark'],
    link: 'https://github.com/cepdnaclk/e20-4yp-A-Hierarchical-Hybrid-Framework-for-Intrusion-Detection-in-Network-and-Application-Layers',
    status: 'Ongoing',
  },
  {
    image: Dear,
    title: 'DEAR – Data Engineering & Research Website',
    description:
      'Official landing page for the Data Engineering and Research (DEAR) group at the University of Peradeniya, showcasing research projects, faculty profiles, and student engagement opportunities.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Git'],
    link: 'https://github.com/Vithustennysan8/Research_Website_new',
    status: 'Completed',
  },
];


function App() {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <>
      {showNav && <FloatingNav />}

      <div className="text-white bg-[#0a0a0b] bg-mesh-gradient">
        {/* Full-screen banner: header + hero */}
        <section id="home" className="min-h-screen flex flex-col">
          <div className="max-w-6xl mx-auto px-4 md:px-6 w-full shrink-0">
            <header className="flex justify-between items-center py-6 md:py-8">
              <a href="#" className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                <span className="gradient-text">Vithu</span><span className="text-white">shan</span>
              </a>
              <nav className="hidden md:flex items-center gap-1">
                {['#', '#about', '#techs', '#projects', '#certifications', '#contact'].map((href, i) => (
                  <a
                    key={i}
                    href={href}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {['Home', 'About', 'Techs', 'Projects', 'Certifications', 'Contact'][i]}
                  </a>
                ))}
              </nav>
            </header>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-0 py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1 order-2 md:order-1 text-center md:text-left" data-aos="fade-right">
                <p className="text-cyan-400 font-medium mb-2">Hi, I am</p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
                  Vithushan <span className="gradient-text">E.T.L.</span>
                </h1>
                <p className="text-xl text-cyan-400/90 font-semibold mb-4">Software Engineer</p>
                <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
                  I&apos;m a <span className="text-cyan-300">Computer Engineering undergraduate</span> at University of Peradeniya,
                  focusing on <span className="text-cyan-300">Full-stack and Backend Development</span> and building modern applications.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href="#about" className="btn-primary">About me</a>
                  <a href={CV} download="Vithushan_CV" className="btn-secondary">Download CV</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vithushan-e-t-l-265a072a1/" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                    <img className="h-8 w-8 opacity-80" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Vithustennysan8" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                    <img className="h-8 w-8 opacity-80" src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="mailto:vithushan.e.t.l@gmail.com" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="Email">
                    <img className="h-8 w-8 opacity-80" src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vithus_tennysan?igsh=dzhrNzYwaXJ6OTNl" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="Instagram">
                    <img className="h-8 w-8 opacity-80" src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center order-1 md:order-2" data-aos="fade-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl animate-glow-pulse" />
                  <img
                    src={profile}
                    alt="Vithushan"
                    className="relative w-56 sm:w-64 md:w-72 lg:w-96 rounded-2xl border border-white/10 shadow-2xl object-cover animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* About — redesigned with photo */}
          <section id="about" className="py-16 md:py-24">
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Row 1: Photo + About (adjacent) */}
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  {/* Photo */}
                  <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-teal-500/20 blur-lg opacity-60" />
                      <img
                        src={profile}
                        alt="Vithushan"
                        className="relative w-full aspect-square rounded-2xl object-cover border border-white/10 shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* About */}
                  <div className="lg:col-span-7" data-aos="fade-left">
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                      About
                    </span>
                    <h2 className="section-heading mt-2">Who I am</h2>

                    <div className="text-zinc-400 leading-relaxed space-y-4 mt-5 max-w-prose">
                      <p>
                        I am <span className="text-cyan-400">Vithushan E.T.L.</span>, a Computer Engineering undergraduate at{" "}
                        <span className="text-cyan-400">the University of Peradeniya</span>. I enjoy designing and building{" "}
                        <span className="text-cyan-400">software systems</span> that solve real-world problems, with a strong
                        focus on clean architecture and scalability.
                      </p>

                      <p>
                        My primary interests are <span className="text-cyan-400">full-stack and backend development</span>.
                        I have hands-on experience building cloud-integrated applications using{" "}
                        <span className="text-cyan-400">React, Spring Boot, REST APIs, WebSockets, and AWS</span>.
                      </p>

                      <p>
                        I am actively seeking opportunities as a{" "}
                        <span className="text-cyan-400">Software Engineering Intern</span> where I can contribute to real
                        products and learn from experienced engineers.
                      </p>

                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-12 mb-10 h-px w-full bg-white/[0.06]" />

                {/* Row 2: Education (below, full width) */}
                <div className="grid md:grid-cols-12 gap-10 items-start" data-aos="fade-up">
                  <div className="md:col-span-5">
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                      Education
                    </span>
                    <h2 className="section-heading mt-2">Academic Background</h2>
                    <p className="text-zinc-400 mt-4 max-w-md">
                      A strong foundation in software engineering, systems design, and problem-solving through coursework
                      and hands-on projects.
                    </p>
                  </div>

                  <div className="md:col-span-7 space-y-6">
                    {/* University */}
                    <div className="relative pl-6 border-l border-zinc-700">
                      <span className="absolute -left-[6px] top-2 w-3 h-3 bg-cyan-400 rounded-full"></span>

                      <div className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-xl p-6 hover:border-cyan-400/50 transition">
                        <p className="text-sm text-cyan-400 font-semibold">Feb 2022 – Present</p>
                        <h3 className="text-lg font-semibold text-white mt-1">University of Peradeniya</h3>
                        <p className="text-zinc-400">BSc (Hons) in Computer Engineering</p>

                        <div className="mt-3 flex flex-wrap gap-2 text-sm">
                          <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                            GPA: 3.705 / 4.0
                          </span>
                          <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                            Software Engineering
                          </span>
                          <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                            Systems & Databases
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* School */}
                    <div className="relative pl-6 border-l border-zinc-700">
                      <span className="absolute -left-[6px] top-2 w-3 h-3 bg-zinc-500 rounded-full"></span>

                      <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                        <p className="text-sm text-zinc-400 font-semibold">Jan 2007 – Oct 2020</p>
                        <h3 className="text-lg font-semibold text-white mt-1">Jaffna Central College</h3>
                        <p className="text-zinc-400">G.C.E. Advanced Level — Physical Science Stream</p>

                        <div className="mt-3 flex flex-wrap gap-2 text-sm">
                          <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">2AB</span>
                          <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">Island Rank: 881</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Education */}
              </div>
            </div>
          </section>


          {/* Tech Stack */}
          <section id="techs" className="py-16 md:py-24">
            <h2 className="section-heading text-center mb-4">Tech stack</h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-12">Technologies I&apos;ve worked with</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                [spring_boot, 'Spring Boot'],
                [react, 'React'],
                [react_native, 'React Native'],
                [java, 'Java'],
                [python, 'Python'],
                [javascript, 'JavaScript'],
                [AWS, 'AWS'],
                [mysql, 'MySQL'],
                [mongodb, 'MongoDB'],
                [redux, 'Redux'],
                [tailwindcss, 'Tailwind'],
                [docker, 'Docker'],
                [git, 'Git'],
                [github, 'Github'],
                [html, 'HTML'],
                [css, 'CSS'],
                [C, 'C'],
                [Arduino, 'Arduino'],
              ].map(([img, name], i) => (
                <TechCard key={name} image={img} name={name} delay={i * 40} />
              ))}
            </div>
          </section>

          {/* Projects — grid scales to any number of projects */}
          <section id="projects" className="py-16 md:py-24">
            <h2 className="section-heading text-center mb-4">Projects</h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-12">
              Things I&apos;ve built — from full-stack apps to static sites.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.title}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  techs={project.techs}
                  link={project.link}
                  link2={project.link2}
                  dataAos="fade-up"
                />
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section id="certifications" className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                Certifications
              </span>
              <h2 className="section-heading mt-2">Professional Certifications</h2>
              <p className="text-zinc-400 mt-4 max-w-2xl">
                Industry-recognized certifications that strengthen my foundation in cloud computing,
                containers, and software development best practices.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Certificate Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur p-5 hover:border-cyan-400/40 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={aws}
                      alt="AWS"
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        AWS Cloud Technical Essentials
                      </h3>
                      <p className="text-sm text-zinc-400">Amazon Web Services</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    Fundamentals of cloud computing concepts, AWS core services,
                    and best practices for building scalable cloud applications.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Jan 2026</span>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/ADN3LD2WFXI1"
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>

                {/* Certificate Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur p-5 hover:border-cyan-400/40 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={ibm_container}
                      alt="IBM"
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        Containers with Docker & Kubernetes
                      </h3>
                      <p className="text-sm text-zinc-400">IBM</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    Hands-on experience with containerization, Docker images,
                    Kubernetes fundamentals, and container orchestration.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Feb 2026</span>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/6TC21ED8OQ5R"
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>

                {/* Certificate Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur p-5 hover:border-cyan-400/40 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={ibm_cloud}
                      alt="IBM"
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        Introduction to Cloud Computing
                      </h3>
                      <p className="text-sm text-zinc-400">IBM</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    Core cloud computing concepts including service models,
                    deployment models, and cloud security fundamentals.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Sep 2024</span>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/QH3MNNPS4648"
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
                
                {/* Certificate Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur p-5 hover:border-cyan-400/40 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={web_development}
                      alt="Web Development"
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        Web Development
                      </h3>
                      <p className="text-sm text-zinc-400">University of Moratuwa</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    Hands-on experience with web development, HTML, CSS, JavaScript, and React.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Oct 2024</span>
                    <a
                      href={web_development}
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
                
                {/* Certificate Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur p-5 hover:border-cyan-400/40 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={python_cert}
                      alt="Python"
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        Python
                      </h3>
                      <p className="text-sm text-zinc-400">HackerRank</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    Hands-on experience with Python, data structures, algorithms, and problem-solving.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Dec 2024</span>
                    <a
                      href={python_cert}
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
                
                {/* Certificate Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur p-5 hover:border-cyan-400/40 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={uiux}
                      alt="UI/UX"
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        UI/UX
                      </h3>
                      <p className="text-sm text-zinc-400">Great Learning</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    Hands-on experience with UI/UX design, user research, and user experience.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Apr 2024</span>
                    <a
                      href={uiux}
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16 md:py-24">
            <h2 className="section-heading text-center mb-4">Contact</h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-10">
              Get in touch — I&apos;m happy to help and collaborate.
            </p>
            <div className="glass-card p-6 md:p-10 max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="mailto:vithushan.e.t.l@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" className="w-10 h-10 opacity-80" alt="" />
                  <span className="font-medium">vithushan.e.t.l@gmail.com</span>
                </a>
                  <a href="tel:0760832397" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors">
                    <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" className="w-10 h-10 opacity-80" alt="" />
                  <span className="font-medium">0760832397</span>
                </a>
              </div>
              
              <ContactForm />
            </div>
          </section>

        </div>

        <footer className="border-t border-white/5 py-6 mt-12">
          <p className="text-center text-zinc-500 text-sm font-medium"> &copy; Vithushan E.T.L. {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
