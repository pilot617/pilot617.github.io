import React, { useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Award, Users, Zap, Shield, Brain, GraduationCap, MapPin, Phone } from 'lucide-react';

function App() {
  const fallbackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-400">Sampat Choudhary</h1>
            <div className="hidden md:flex gap-8">
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-purple-400 transition-colors">Achievements</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32 mt-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border-4 border-purple-500/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Sampat Choudhary" 
                  className="w-full h-full object-cover"
                  onError={() => {
                    // Fallback to initials if image fails to load
                    if (fallbackRef.current) {
                      fallbackRef.current.style.display = 'flex';
                    }
                  }}
                />
                <div ref={fallbackRef} className="text-center hidden" id="fallback">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                    SC
                  </div>
                  <p className="text-purple-400 font-medium">Sampat Choudhary</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sampat Choudhary
              <span className="block text-purple-400 text-2xl md:text-3xl font-normal mt-2">Senior Software Engineer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experienced software engineer with expertise in AI/ML systems, authentication & authorization, 
              and full-stack development. Currently building voice AI systems at Prodigal, with previous 
              experience at Microsoft developing enterprise-scale applications.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Authentication & Security</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm">AI/ML Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm">Full-Stack Development</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg">
                Get in Touch
              </a>
              <a href="#experience" className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-lg font-medium transition-colors">
                View Experience
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Bangalore, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">sampat0choudhary@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 9251374401</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20" id="education">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-2xl font-semibold">Indian Institute of Technology, Kanpur</h3>
                  <p className="text-xl text-gray-300">Bachelor of Technology in Electrical Engineering</p>
                  <p className="text-gray-400">2016 - 2020 • Kanpur, India</p>
                </div>
              </div>
              <p className="text-gray-300">
                Graduated from one of India's premier engineering institutions with a strong foundation in 
                electrical engineering principles, which has provided a solid base for understanding complex 
                systems and problem-solving approaches in software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {/* Prodigal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-purple-400">Senior Software Engineer</h3>
                  <p className="text-xl text-gray-300">Prodigal</p>
                  <p className="text-gray-400">April 2025 - Present • Bangalore, IN</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">AI/ML</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Voice AI</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated with a team to develop and maintain ProAgent, a voice AI system that assists debt collectors through automated phone calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and built in-house voice orchestration infrastructure enabling real-time voice calls integrated with LLM-powered agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Created multi-state prompt flows and implemented tools to support multi-agent systems for scalable multi-tenant deployments</span>
                </li>
              </ul>
            </div>

            {/* Microsoft */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-400">Software Engineer II</h3>
                  <p className="text-xl text-gray-300">Microsoft</p>
                  <p className="text-gray-400">Feb 2024 - April 2025 • Bangalore, IN</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Authentication</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Security</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed user and S2S authentication and authorization layers for Viva Goals services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented Continuous Access Evaluation for Viva Goals to enhance security for Financial Services Industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built background worker host service using Azure Event Hub and Azure Functions for audit log management</span>
                </li>
              </ul>
            </div>

            {/* Microsoft SE I */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-400">Software Engineer I</h3>
                  <p className="text-xl text-gray-300">Microsoft</p>
                  <p className="text-gray-400">Nov 2021 - Feb 2024 • Bangalore, IN</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Full-Stack</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">.NET</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed scalable permission model for OKR application, managing resource permissions across users, groups, and teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed ASP.NET Core authentication service using MISE and SAL NuGet packages for enhanced security</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated with Microsoft AuthNZ team to improve authentication security and implement PFT tokens</span>
                </li>
              </ul>
            </div>

            {/* Ally.io */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-green-400">Software Engineer</h3>
                  <p className="text-xl text-gray-300">Ally.io</p>
                  <p className="text-gray-400">Aug 2020 - Oct 2021 • Chennai, IN</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Full-Stack</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Revamped the admin application by adding multiple features to address frequently asked requests quickly for the Customer Support team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed features end-to-end using AngularJS and Ruby on Rails, building deep understanding of the Ruby on Rails framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented various background jobs using Sidekiq and important features for data insights service using Golang and MongoDB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <Code2 className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Languages & Frameworks</h3>
              <p className="text-gray-400">C#, .NET, Python, JavaScript, TypeScript, React, Angular, Ruby on Rails, Golang</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud & Infrastructure</h3>
              <p className="text-gray-400">Azure, Kubernetes, Docker, Event Hub, Azure Functions, MongoDB, SQL Server</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
              <Brain className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI/ML & Voice</h3>
              <p className="text-gray-400">LLM Integration, Voice AI, LiveKit, Deepgram STT, ElevenLabs TTS, LangSmith</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
              <Shield className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security & Auth</h3>
              <p className="text-gray-400">Authentication, Authorization, OAuth, S2S Auth, Continuous Access Evaluation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm" id="achievements">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Notable Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-12 h-12 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">Patent Holder</h3>
                  <p className="text-gray-400">Microsoft Patent MS 412647-US-NP</p>
                </div>
              </div>
              <p className="text-gray-300">
                Conceived, designed, and implemented a solution for managing alignment permissions of multi-nested OKRs, 
                resulting in the patent "Dynamic Control of Multi-Nested OKR Alignment."
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold">Technical Leadership</h3>
                  <p className="text-gray-400">Subject Matter Expert</p>
                </div>
              </div>
              <p className="text-gray-300">
                Became the SME for authentication and permission models at Microsoft, mentoring interns and new hires 
                while driving cross-functional collaboration on security matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Side Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Agentic Code Assistant</h3>
                <p className="text-gray-400 mb-4">
                  Developed an intelligent code assistant using Python FastAPI and LiteLLM, integrating LangSmith APIs 
                  to enable automated code modification and analysis.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">FastAPI</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">AI/ML</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Features robust error handling and context management for accurate code modifications while preserving codebase integrity.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">CLI Development Tool</h3>
                <p className="text-gray-400 mb-4">
                  Built a complementary CLI frontend tool that interprets agent responses and executes necessary actions 
                  directly in the user's development environment.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">CLI</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Automation</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">DevOps</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Enables seamless integration between AI agents and development workflows for enhanced productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="https://github.com/pilot617" className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-purple-500/30">
              <Github className="w-6 h-6" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sampat-choudhary-996b75155/" className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-blue-500/30">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a href="mailto:sampat0choudhary@gmail.com" className="flex items-center gap-3 text-lg hover:text-green-400 transition-colors bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-green-500/30">
              <Mail className="w-6 h-6" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sampat Choudhary - Senior Software Engineer</p>
          <p className="text-sm mt-2">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;