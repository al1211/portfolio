'use client';
import About from "./about/page"
import Projects from "./projects/page";
import Contact from "./contact/page"
import Skills from "./skills/page";


export default function page() {
 
  return (
    <div className="">
      <main className="">
       
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    
    </div>
  );
}
