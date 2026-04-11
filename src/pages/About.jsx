
function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a12] text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Side */}
          <div className="flex justify-center">
            <div className="relative p-2 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600">
              <img 
                src="https://via.placeholder.com/500x400" 
                alt="Team Collaboration" 
                className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Innovative Solutions as a Team
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We are a dedicated team of final-year students specializing in Computer Science. 
              Our collaborative approach combines AI integration, full-stack architecture, 
              and intuitive UI/UX design to solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#161625] rounded-lg border border-gray-800">
                <h4 className="text-blue-400 font-bold">10+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-[#161625] rounded-lg border border-gray-800">
                <h4 className="text-purple-400 font-bold">3+</h4>
                <p className="text-sm text-gray-400">Core Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;