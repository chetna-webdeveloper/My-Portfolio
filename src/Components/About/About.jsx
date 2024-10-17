import React from 'react';
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaNodeJs,
} from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="py-20 md:px-20 px-5 bg-black text-white border-b-2 border-gray-400"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold px-4 border-b-4 border-white inline-block mb-10">
          About Me
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          Hello! I'm <span className="font-bold text-blue-400">Chetna</span>, a passionate web developer currently honing my skills and expanding my
          knowledge. I'm dedicated to building clean, efficient, and user-friendly websites. My goal is to help others establish their
          online presence, whether it be an online store or an informational site.
        </p>
        <div className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-x-10 lg:mt-12 mt-0">
          <Card
            icon={<FaLaptopCode size={50} className="mb-4 text-white" />}
            title="Web Development"
            description="I specialize in creating modern and responsive websites using the latest web technologies."
          />
          <Card
            icon={<FaCode size={50} className="mb-4 text-white" />}
            title="Full Stack Development"
            description="Skilled in both front-end and back-end development, I build complete solutions that integrate seamlessly."
          />
          <Card
            icon={<FaTools size={50} className="mb-4 text-white" />}
            title="Learning & Growth"
            description="Currently, I am focused on learning and mastering web technologies like React, Tailwind CSS, and GitHub."
          />
          <Card
            icon={<FaReact size={50} className="mb-4 text-white" />}
            title="React Development"
            description="I'm experienced in building dynamic and interactive web applications using React."
          />
          <Card
            icon={<FaNodeJs size={50} className="mb-4 text-white" />}
            title="Backend & APIs"
            description="I create custom backends using Node.js, Express, and MongoDB, and design RESTful APIs for robust applications."
          />
          <Card
            icon={<FaDatabase size={50} className="mb-4 text-white" />}
            title="Database Management"
            description="Proficient in working with MongoDB to manage data and ensure smooth integration with backend systems."
          />
          <Card
            icon={<FaHtml5 size={50} className="mb-4 text-white" />}
            title="HTML & CSS"
            description="I have a solid foundation in HTML and CSS, creating well-structured and styled websites."
          />
          <Card
            icon={<FaCss3Alt size={50} className="mb-4 text-white" />}
            title="CSS & Design"
            description="I create responsive and visually appealing designs using modern CSS techniques."
          />
          <Card
            icon={<FaJsSquare size={50} className="mb-4 text-white" />}
            title="JavaScript"
            description="Skilled in JavaScript, I develop interactive features and functionality for web applications."
          />
        </div>
      </div>
    </section>
  );
}

// Card component for reuse
function Card({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center px-4 py-6 my-4 hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 ease-in-out transform hover:scale-105">
      {icon}
      <h3 className="text-2xl mb-3 mt-4 border-b-2 border-white inline-block">
        {title}
      </h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default About;
