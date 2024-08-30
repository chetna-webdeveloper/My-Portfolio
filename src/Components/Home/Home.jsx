import React from 'react';
import { Link } from 'react-router-dom';
// import bg1 from '../../assets/web dev 4.jpg'
import contactme from '../../assets/contactme.png'
import my from '../../assets/girl.png'
import About from '../About/About'
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects'
function Home() {
  return (<>
    <div className="Home w-full h-screen  border-b-2 border-gray-400 bg-black text-white">
      {/* {"home section"} */}
     
      <section  id="Home" className="Home grid grid-cols-2 gap-9 ">
        <div className="intro p-10 flex flex-col md:w-2/3">
          <span className='text-2xl mt-10'>Hello</span>
          <span className='text-4xl md:text-5xl font-bold '>I'm <span className='text-blue-900 border-b-2 border-white'> Chetna</span></span>
          <span className='text-4xl font-bold mb-8 mt-3'> Web Developer</span>
          <p>I'm a skilled and passionate web-developer in creating visually appealing and user-friendly websites.</p>
          <div className="contactBtn w-19 mt-5 ">
          <Link
          to="/Contact"
          className="flex items-center px-4 py-2 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-6 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out w-44">
          
              <img src={contactme} alt="Contact" className="h-5 w-5   mr-2" />
          Contact Me
        </Link>
          </div>
          
        </div>
        <div className="   hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out animate-profile_animate shadow-custom-dark shadow-inset-custom w-1/2 p-1 mt-10 mr-10"  >
          <img className="animate-profile_animate shadow-custom-dark shadow-inset-custom p-2 mt-10" src={my} alt="" />
         
        </div>
</section>
</div>

     {/* {"About section"} */}
      <div>
        <About/>
      </div>

      {/* {"skills section"} */}
    <div>
      <Skills/>
    </div>


      {/* {"Projects section"} */}
   <div>
    <Projects/>
   </div>


  </>
  );
}

export default Home;


