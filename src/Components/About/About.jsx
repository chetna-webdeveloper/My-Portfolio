// import React from 'react'

// function About() {
//   return (
//     <section id="about" className="py-20 md:px-20 px-5 bg-black text-white border-b-2 border-gray-400">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-semibold px-4 border-b-4 border-white inline-block mb-6">About Me</h2>
//         <p className="text-lg mb-4">
//           Hi, I'm Chetna, a passionate web developer with experience in building dynamic and interactive web applications.
//           My focus is on creating clean, efficient, and user-friendly websites that deliver exceptional user experiences.
//         </p>
//         <div className='grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-x-10 lg:mt-12 mt:0'>
//           <div className="flex items-center px-4 py-2 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-10 pb-5 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out " >
//             <div>
//               <h3 className='text-2xl mb-3 mt-4 border-b-2 border-white inline-block'>CODER</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus!</p>
//             </div>
//           </div>

//           <div className="flex items-center px-4 py-2 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-10 pb-5 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out " >
//             <div>
//               <h3 className='text-2xl mb-3 mt-4 border-b-2 border-white inline-block'>CODER</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus!</p>
//             </div>
//           </div>
//           <div className="flex items-center px-4 py-2 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-10 pb-5 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out " >
//             <div>
//               <h3 className='text-2xl mb-3 mt-4 border-b-2 border-white inline-block'>CODER</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus!</p>
//             </div>
//           </div>

//           <div className="flex items-center px-4 py-2 my-4 hover:bg-blue-700 hover:scale-[1.1] bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-10 pb-5 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out " >
//             <div className=''>
//               <h3 className='text-2xl mb-3 mt-4 border-b-2 border-white inline-block'>CODER</h3>
//               <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus!</p>
//             </div>
//           </div>
//           <div className="flex items-center px-4 py-2 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-10 pb-5 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out " >
//             <div>
//               <h3 className='text-2xl mb-3 mt-4 border-b-2 border-white inline-block'>CODER</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus!</p>
//             </div>
//           </div>
//           <div className="flex items-center px-4 py-2 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-10 pb-5 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out " >
//             <div>
//               <h3 className='text-2xl mb-3 mt-4 border-b-2 border-white inline-block'>CODER</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About



import React from 'react';
import { FaCode, FaLaptopCode, FaTools, FaReact, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-20 md:px-20 px-5 bg-black text-white border-b-2 border-gray-400">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold px-4 border-b-4 border-white inline-block mb-10">About Me</h2>
        <p className="text-lg mb-10 leading-relaxed">
          Hello! I'm <span className="font-bold text-blue-400">Chetna</span>, a passionate web developer currently honing my skills and expanding my knowledge.
          I'm dedicated to building clean, efficient, and user-friendly websites. My goal is to help others establish their online presence, whether it be an online store or an informational site.
        </p>
        <div className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-x-10 lg:mt-12 mt-0">
          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaLaptopCode size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">Web Development</h3>
            <p>I specialize in creating modern and responsive websites using the latest web technologies.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaCode size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">Coding Enthusiast</h3>
            <p>I love coding and constantly seek to improve my skills in languages like HTML, CSS, and JavaScript.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaTools size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">Learning & Growth</h3>
            <p>Currently, I am focused on learning and mastering web technologies like React, Tailwind CSS, and GitHub.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaReact size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">React Development</h3>
            <p>I'm experienced in building dynamic and interactive web applications using React.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaGithub size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">Version Control</h3>
            <p>I have proficiency in using GitHub for version control and collaborative projects.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaHtml5 size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">HTML & CSS</h3>
            <p>I have a solid foundation in HTML and CSS, creating well-structured and styled websites.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaCss3Alt size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">CSS & Design</h3>
            <p>I create responsive and visually appealing designs using modern CSS techniques.</p>
          </div>

          <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
            <FaJsSquare size={50} className="mb-4 text-white" />
            <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">JavaScript</h3>
            <p>Skilled in JavaScript, I develop interactive features and functionality for web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
