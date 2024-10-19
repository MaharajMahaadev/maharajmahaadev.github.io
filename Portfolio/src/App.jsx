import { useState, useRef } from 'react'
import Home from "./Home"
import Skills from "./Skills"
import Projects from './Projects';
import Blogs from './Blogs';
import Contact from './Contact';

function App() {
  const refs = useRef([]);

  function page(val){
    refs.current[val].scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className='bg-slate-200'>
      <nav className='z-10 w-full h-[11vh]  grid grid-flow-col pr-[20%] pl-[20%] pt-[1.5%] pb-[1.5%] gap-[2vh]'>
        <button onClick={() => page(0)} className='mcbutton'>Home</button>
        <button onClick={() => page(1)} className='mcbutton'>Experience & Skills</button>
        <button onClick={() => page(2)} className='mcbutton'>Projects</button>
        <button onClick={() => page(3)} className='mcbutton'>Contact</button>
        <button onClick={() => page(4)} className='mcbutton'>Blogs</button>
      </nav>
      <div className='h-[81vh] max-w-full overflow-x-hidden overflow-y-scroll'>
      <section ref={(el) => (refs.current[0] = el)}>
       <Home />
       </section>
       <section  ref={(el) => (refs.current[1] = el)}>
       <Skills />
       </section>
       <section ref={(el) => (refs.current[2] = el)}>
       <Projects />
       </section>
       <section ref={(el) => (refs.current[3] = el)}>
       <Contact />
       </section>
       <section ref={(el) => (refs.current[4] = el)}>
       <Blogs />
       </section>
      </div>
        <footer className='h-[8vh] z-10 bottom-0 grid grid-flow-col pr-[10%] pl-[10%] pt-[1%] pb-[1%] gap-[2vh]'>
          <button className='cbutton'><a target="_blank" href="https://github.com/MaharajMahaadev">Github</a></button>
          <button className='cbutton'><a target="_blank" href="https://www.linkedin.com/in/maharaj-mahaadev/">Linkedin</a></button>
          <button className='cbutton'><a target="_blank" href="https://auth.geeksforgeeks.org/user/e20cskkyj/practice">GeeksforGeeks</a></button>
          <button className='cbutton'><a target="_blank" href="https://leetcode.com/Maharaj_Mahaadev/">Leetcode</a></button>
          <button className='cbutton'><a target="_blank" href="#">Resume</a></button>
          <button className='cbutton'><a target="_blank" href="https://medium.com/@e20cse085">Medium</a></button>
          <button className='cbutton'><a target="_blank" href="mailto:maharajmahaadev2@gmail.com">Email</a></button>
        </footer>
    </main>
  )
}

export default App
