// import React from 'react'

// function Portfolio() {
//   return (
//     <div className="Projects w-full min-h-screen py-20 md:px-20 px-5 bg-black text-white border-b-2 border-gray-400">
//     {/* {"Projects section"} */}
//     <section id="Projects" className="Projects">
//       <div className="container mx-auto text-center">
//             <h2 className="text-5xl font-semibold mb-10 border-b-4 mt-10 border-white inline-block">My Projects</h2>
//             <div className='grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-x-10 lg:mt-12 mt:0'>
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

//   </div>
//   )
// }

// export default Portfolio



import React from 'react';

function Portfolio() {
  return (
    <div className="Projects w-full min-h-screen py-20 md:px-20 px-5 bg-gradient-to-r from-black via-gray-800 to-black text-white">
      <section id="Projects" className="Projects">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold mb-10 border-b-4 mt-10 border-blue-500 inline-block">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-12">
            
            <div className="flex flex-col items-center p-6 bg-blue-900 bg-opacity-40 backdrop-blur-lg border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl mb-3 border-b-2 border-white inline-block">BlogWeb</h3>
              <p className="text-center">
                A full-fledged blog website built using React, Tailwind CSS, and Appwrite for backend services. Deployed on Netlify.
              </p>
              <a href="https://blogweb-appwrite-react.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Visit Project</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-900 bg-opacity-40 backdrop-blur-lg border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl mb-3 border-b-2 border-white inline-block">My-JS-Projects</h3>
              <p className="text-center">
                A compilation of 30 small JavaScript projects including a calculator, age calculator, password generator, and more. 
              </p>
              <a href="https://github.com/yourusername/My-JS-Projects" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Visit Repository</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-900 bg-opacity-40 backdrop-blur-lg border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl mb-3 border-b-2 border-white inline-block">Other Project</h3>
              <p className="text-center">
                Brief description of another project. This can include technologies used, and what you learned from it.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Visit Project</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-900 bg-opacity-40 backdrop-blur-lg border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl mb-3 border-b-2 border-white inline-block">Another Project</h3>
              <p className="text-center">
                Another project description, with a focus on what it does and the tech stack behind it.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Visit Project</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-900 bg-opacity-40 backdrop-blur-lg border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl mb-3 border-b-2 border-white inline-block">Additional Project</h3>
              <p className="text-center">
                Include details about another project. Mention the features and skills you developed while working on it.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Visit Project</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-900 bg-opacity-40 backdrop-blur-lg border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl mb-3 border-b-2 border-white inline-block">One More Project</h3>
              <p className="text-center">
                Details of another significant project, focusing on what makes it stand out.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Visit Project</a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
