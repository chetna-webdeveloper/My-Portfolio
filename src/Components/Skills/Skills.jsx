// import React from 'react'

// function Skills() {
//   return (
//     <section id="skills" className="py-20 md:px-20 px-5 bg-black text-white border-b-2 border-gray-400">
//       <div className="container mx-auto text-center ">
//         <h2 className="text-5xl font-semibold mb-10 border-b-4 border-white inline-block">Skills</h2>
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

// export default Skills


import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaLaptopCode } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="py-20 md:px-20 px-5 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 border-b-4 border-white inline-block">Skills</h2>
        <p className="text-lg mb-12 leading-relaxed">
          Here are some of the skills I've honed and am continuously improving as I journey through the world of web development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="group flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700">
            <FaHtml5 size={50} className="text-red-500 mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl mb-3 font-semibold group-hover:text-white">HTML5</h3>
            <p className="text-base group-hover:text-gray-300">Crafting well-structured web pages with semantic HTML5.</p>
          </div>

          <div className="group flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700">
            <FaCss3Alt size={50} className="text-blue-500 mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl mb-3 font-semibold group-hover:text-white">CSS3</h3>
            <p className="text-base group-hover:text-gray-300">Designing responsive and visually appealing websites with modern CSS.</p>
          </div>

          <div className="group flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700">
            <FaJsSquare size={50} className="text-yellow-500 mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl mb-3 font-semibold group-hover:text-white">JavaScript</h3>
            <p className="text-base group-hover:text-gray-300">Bringing interactivity and functionality to websites with JavaScript.</p>
          </div>

          <div className="group flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700">
            <FaReact size={50} className="text-cyan-500 mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl mb-3 font-semibold group-hover:text-white">React</h3>
            <p className="text-base group-hover:text-gray-300">Building dynamic and interactive user interfaces with React.</p>
          </div>

          <div className="group flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700">
            <FaGitAlt size={50} className="text-orange-500 mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl mb-3 font-semibold group-hover:text-white">Git & GitHub</h3>
            <p className="text-base group-hover:text-gray-300">Managing code versions and collaborating on projects with Git.</p>
          </div>

          <div className="group flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700">
            <FaLaptopCode size={50} className="text-green-500 mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl mb-3 font-semibold group-hover:text-white">Problem Solving</h3>
            <p className="text-base group-hover:text-gray-300">Applying analytical thinking to solve complex coding challenges.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;
