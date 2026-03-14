import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Code2, Database, Terminal, Award, Users, Zap, Shield, Brain, GraduationCap, MapPin, Phone, Download, ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Layout from '../components/Layout';

export default function HomePage() {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const sections = ['education', 'experience', 'skills', 'achievements', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Handle scroll-to-section when navigating back from blog
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  return (
    <Layout activeSection={activeSection}>
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32 mt-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-full max-w-md aspect-square bg-gray-900 rounded-2xl border-2 border-neon-cyan/20 flex items-center justify-center overflow-hidden profile-glow">
                <img
                  src="/profile.jpg"
                  alt="Sampat Choudhary"
                  className="w-full h-full object-cover"
                  onError={() => {
                    if (fallbackRef.current) {
                      fallbackRef.current.style.display = 'flex';
                    }
                  }}
                />
                <div ref={fallbackRef} className="text-center hidden" id="fallback">
                  <div className="w-32 h-32 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-gray-950">
                    SC
                  </div>
                  <p className="text-neon-cyan font-medium">Sampat Choudhary</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-neon-green text-sm font-medium">Available for opportunities</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sampat Choudhary
              <span className="block text-neon-cyan text-2xl md:text-3xl font-normal mt-2">Senior Software Engineer</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Experienced software engineer with expertise in AI/ML systems, authentication & authorization,
              and full-stack development. Currently building voice AI systems at Prodigal, with previous
              experience at Microsoft developing enterprise-scale applications.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-neon-magenta/10 px-4 py-2 rounded-lg border border-neon-magenta/30 hover:bg-neon-magenta/20 transition-colors">
                <Shield className="w-4 h-4 text-neon-magenta" />
                <span className="text-sm text-neon-magenta/90">Authentication & Security</span>
              </div>
              <div className="flex items-center gap-2 bg-neon-cyan/10 px-4 py-2 rounded-lg border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors">
                <Brain className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-neon-cyan/90">AI/ML Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-neon-green/10 px-4 py-2 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-colors">
                <Zap className="w-4 h-4 text-neon-green" />
                <span className="text-sm text-neon-green/90">Full-Stack Development</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-neon-cyan text-gray-950 hover:bg-neon-cyan/80 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/30 hover:-translate-y-0.5">
                Get in Touch
              </a>
              <a href="/sampat-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-neon-cyan/40 hover:border-neon-cyan/70 bg-neon-cyan/5 hover:bg-neon-cyan/10 px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5 text-neon-cyan">
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5 text-gray-300">
                View Experience
              </a>
            </div>
            {/* Scroll indicator */}
            <div className="hidden md:flex justify-center mt-16 animate-bounce">
              <ChevronDown className="w-6 h-6 text-neon-cyan/40" />
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info */}
      <FadeIn>
        <section className="py-12 bg-gray-900/50 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-neon-magenta/10 group-hover:bg-neon-magenta/20 transition-colors">
                  <MapPin className="w-6 h-6 text-neon-magenta" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Bangalore, India</p>
                </div>
              </div>
              <a href="mailto:sampat0choudhary@gmail.com" className="flex items-center gap-4 group hover:text-neon-cyan transition-colors">
                <div className="p-3 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                  <Mail className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">sampat0choudhary@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-colors">
                  <Phone className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+91 9251374401</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Education Section */}
      <section className="py-20" id="education">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          </FadeIn>
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-cyan hover:border-neon-cyan/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-neon-cyan/10">
                  <GraduationCap className="w-10 h-10 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Indian Institute of Technology, Kanpur</h3>
                  <p className="text-xl text-gray-400">Bachelor of Technology in Electrical Engineering</p>
                  <p className="text-gray-500">2016 - 2020</p>
                </div>
              </div>
              <p className="text-gray-400">
                Graduated from one of India's premier engineering institutions with a strong foundation in
                electrical engineering principles, which has provided a solid base for understanding complex
                systems and problem-solving approaches in software development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900/50 border-y border-white/5" id="experience">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          </FadeIn>
          <div className="space-y-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/30 via-neon-magenta/20 to-neon-green/10"></div>

            {/* Prodigal */}
            <FadeIn>
              <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-cyan hover:border-neon-cyan/30">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neon-cyan">Senior Software Engineer</h3>
                    <p className="text-xl text-gray-300">Prodigal</p>
                    <p className="text-gray-500">April 2025 - Present</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
                    <span className="bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 px-3 py-1 rounded-full text-sm">Voice AI</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-cyan/50"></div>
                    <span>Collaborated with a team to develop and maintain ProAgent, a voice AI system that assists debt collectors through automated phone calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-cyan/50"></div>
                    <span>Designed and built in-house voice orchestration infrastructure enabling real-time voice calls integrated with LLM-powered agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-cyan/50"></div>
                    <span>Created multi-state prompt flows and implemented tools to support multi-agent systems for scalable multi-tenant deployments</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Microsoft SE II */}
            <FadeIn>
              <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-magenta hover:border-neon-magenta/30">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neon-magenta">Software Engineer II</h3>
                    <p className="text-xl text-gray-300">Microsoft</p>
                    <p className="text-gray-500">Feb 2024 - April 2025</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 px-3 py-1 rounded-full text-sm">Authentication</span>
                    <span className="bg-neon-green/10 text-neon-green border border-neon-green/20 px-3 py-1 rounded-full text-sm">Security</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-magenta/50"></div>
                    <span>Designed user and S2S authentication and authorization layers for Viva Goals services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-magenta/50"></div>
                    <span>Implemented Continuous Access Evaluation for Viva Goals to enhance security for Financial Services Industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-magenta/50"></div>
                    <span>Built background worker host service using Azure Event Hub and Azure Functions for audit log management</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Microsoft SE I */}
            <FadeIn>
              <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-magenta hover:border-neon-magenta/30">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neon-magenta">Software Engineer I</h3>
                    <p className="text-xl text-gray-300">Microsoft</p>
                    <p className="text-gray-500">Nov 2021 - Feb 2024</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-3 py-1 rounded-full text-sm">Full-Stack</span>
                    <span className="bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 px-3 py-1 rounded-full text-sm">.NET</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-magenta/50"></div>
                    <span>Designed scalable permission model for OKR application, managing resource permissions across users, groups, and teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-magenta/50"></div>
                    <span>Developed ASP.NET Core authentication service using MISE and SAL NuGet packages for enhanced security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-magenta/50"></div>
                    <span>Collaborated with Microsoft AuthNZ team to improve authentication security and implement PFT tokens</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Ally.io */}
            <FadeIn>
              <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-green hover:border-neon-green/30">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neon-green">Software Engineer</h3>
                    <p className="text-xl text-gray-300">Ally.io</p>
                    <p className="text-gray-500">Aug 2020 - Oct 2021</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neon-green/10 text-neon-green border border-neon-green/20 px-3 py-1 rounded-full text-sm">Full-Stack</span>
                    <span className="bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-green/50"></div>
                    <span>Revamped the admin application by adding multiple features to address frequently asked requests quickly for the Customer Support team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-green/50"></div>
                    <span>Developed features end-to-end using AngularJS and Ruby on Rails, building deep understanding of the Ruby on Rails framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0 shadow-sm shadow-neon-green/50"></div>
                    <span>Implemented various background jobs using Sidekiq and important features for data insights service using Golang and MongoDB</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20" id="skills">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          </FadeIn>
          <FadeIn stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-neon-cyan/30 card-hover neon-cyan">
              <Code2 className="w-12 h-12 text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-3">Languages & Frameworks</h3>
              <p className="text-gray-500">C#, .NET, Python, JavaScript, TypeScript, React, Angular, Ruby on Rails, Golang</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-neon-magenta/30 card-hover neon-magenta">
              <Database className="w-12 h-12 text-neon-magenta mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud & Infrastructure</h3>
              <p className="text-gray-500">Azure, Kubernetes, Docker, Event Hub, Azure Functions, MongoDB, SQL Server</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-neon-green/30 card-hover neon-green">
              <Brain className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI/ML & Voice</h3>
              <p className="text-gray-500">LLM Integration, Voice AI, LiveKit, Deepgram STT, ElevenLabs TTS, LangSmith</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-neon-yellow/30 card-hover neon-yellow">
              <Shield className="w-12 h-12 text-neon-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security & Auth</h3>
              <p className="text-gray-500">Authentication, Authorization, OAuth, S2S Auth, Continuous Access Evaluation</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900/50 border-y border-white/5" id="achievements">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Notable Achievements</h2>
          </FadeIn>
          <FadeIn stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-yellow hover:border-neon-yellow/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-neon-yellow/10">
                  <Award className="w-10 h-10 text-neon-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Patent Holder</h3>
                  <p className="text-gray-500">Microsoft Patent MS 412647-US-NP</p>
                </div>
              </div>
              <p className="text-gray-400">
                Conceived, designed, and implemented a solution for managing alignment permissions of multi-nested OKRs,
                resulting in the patent "Dynamic Control of Multi-Nested OKR Alignment."
              </p>
            </div>
            <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover neon-cyan hover:border-neon-cyan/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-neon-cyan/10">
                  <Users className="w-10 h-10 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Technical Leadership</h3>
                  <p className="text-gray-500">Subject Matter Expert</p>
                </div>
              </div>
              <p className="text-gray-400">
                Became the SME for authentication and permission models at Microsoft, mentoring interns and new hires
                while driving cross-functional collaboration on security matters.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Side Projects</h2>
          </FadeIn>
          <FadeIn stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg bg-gray-900/60 border border-gray-800 overflow-hidden hover:border-neon-cyan/30 card-hover neon-cyan">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-neon-cyan">Agentic Code Assistant</h3>
                <p className="text-gray-500 mb-4">
                  Developed an intelligent code assistant using Python FastAPI and LiteLLM, integrating LangSmith APIs
                  to enable automated code modification and analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-2 py-1 rounded text-xs">FastAPI</span>
                  <span className="bg-neon-green/10 text-neon-green border border-neon-green/20 px-2 py-1 rounded text-xs">AI/ML</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Features robust error handling and context management for accurate code modifications while preserving codebase integrity.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-900/60 border border-gray-800 overflow-hidden hover:border-neon-magenta/30 card-hover neon-magenta">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-neon-magenta">CLI Development Tool</h3>
                <p className="text-gray-500 mb-4">
                  Built a complementary CLI frontend tool that interprets agent responses and executes necessary actions
                  directly in the user's development environment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-2 py-1 rounded text-xs">CLI</span>
                  <span className="bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 px-2 py-1 rounded text-xs">Automation</span>
                  <span className="bg-neon-green/10 text-neon-green border border-neon-green/20 px-2 py-1 rounded text-xs">DevOps</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Enables seamless integration between AI agents and development workflows for enhanced productivity.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50 border-y border-white/5" id="contact">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
            <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
              Interested in collaborating or have a question? Feel free to reach out through any of the channels below.
            </p>
          </FadeIn>
          <FadeIn stagger className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a href="https://github.com/pilot617" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-neon-cyan transition-all bg-gray-900/60 px-6 py-4 rounded-lg border border-gray-800 hover:border-neon-cyan/30 card-hover neon-cyan w-full md:w-auto justify-center">
              <Github className="w-6 h-6" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sampat-choudhary-996b75155/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-neon-magenta transition-all bg-gray-900/60 px-6 py-4 rounded-lg border border-gray-800 hover:border-neon-magenta/30 card-hover neon-magenta w-full md:w-auto justify-center">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a href="mailto:sampat0choudhary@gmail.com" className="flex items-center gap-3 text-lg hover:text-neon-green transition-all bg-gray-900/60 px-6 py-4 rounded-lg border border-gray-800 hover:border-neon-green/30 card-hover neon-green w-full md:w-auto justify-center">
              <Mail className="w-6 h-6" /> Email
            </a>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
