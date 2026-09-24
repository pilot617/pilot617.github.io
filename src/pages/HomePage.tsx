import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Braces,
  Check,
  ChevronDown,
  Copy,
  Download,
  GraduationCap,
  Layers3,
  MapPin,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Layout from '../components/Layout';
import SystemVisual from '../components/SystemVisual';
import ArticleCard from '../components/ArticleCard';
import posts from '../content/blog';

const experience = [
  {
    company: 'Prodigal',
    role: 'Senior Software Engineer',
    date: 'APR 2025 — PRESENT',
    mark: 'p',
    current: true,
    summary: 'Giving intelligent systems a voice.',
    points: [
      'Building ProAgent with the team: a voice AI system that supports debt collectors through automated phone calls.',
      'Designed in-house voice orchestration for real-time calls with LLM-powered agents.',
      'Created multi-state prompt flows and tools for multi-agent, multi-tenant deployments.',
    ],
    stack: 'Voice AI / LLMs / LiveKit / Python',
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer II',
    date: 'FEB 2024 — APR 2025',
    mark: 'ms',
    summary: 'Making enterprise systems more secure.',
    points: [
      'Designed user and service-to-service authentication and authorization for Viva Goals.',
      'Implemented Continuous Access Evaluation for financial services security requirements.',
      'Built an audit-log worker service with Azure Event Hub and Azure Functions.',
    ],
    stack: 'C# / .NET / Azure / Authentication',
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer I',
    date: 'NOV 2021 — FEB 2024',
    mark: 'ms',
    summary: 'Building the foundations of access and trust.',
    points: [
      'Designed a scalable OKR permission model across users, groups, and teams.',
      'Developed an ASP.NET Core authentication service with MISE and SAL.',
      'Partnered with Microsoft’s AuthNZ team on authentication security and PFT tokens.',
    ],
    stack: 'ASP.NET Core / Authorization / Full-stack',
  },
  {
    company: 'Ally.io',
    role: 'Software Engineer',
    date: 'AUG 2020 — OCT 2021',
    mark: 'a',
    summary: 'Taking features from idea to production.',
    points: [
      'Revamped the admin application to help Customer Support resolve frequent requests.',
      'Shipped end-to-end features with AngularJS and Ruby on Rails.',
      'Built background jobs with Sidekiq and data insights features with Go and MongoDB.',
    ],
    stack: 'Ruby on Rails / AngularJS / Go / MongoDB',
  },
];
const skills = [
  {
    icon: AudioLines,
    title: 'Intelligent systems',
    text: 'Voice AI, LLM integration, multi-agent orchestration',
    tools: 'LiveKit · Deepgram · ElevenLabs · LangSmith',
  },
  {
    icon: ShieldCheck,
    title: 'Security by design',
    text: 'Authentication, authorization, permission models',
    tools: 'OAuth · S2S auth · Continuous Access Evaluation',
  },
  {
    icon: Layers3,
    title: 'End-to-end engineering',
    text: 'From thoughtful interfaces to resilient infrastructure',
    tools: 'React · TypeScript · Python · C# · .NET · Go',
  },
  {
    icon: Braces,
    title: 'Built for production',
    text: 'Cloud infrastructure, background jobs, data systems',
    tools: 'Azure · Kubernetes · Docker · SQL · MongoDB',
  },
];

function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="accent">{number}</span>
          <span className="label-rule" />
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 },
    );
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      clearTimeout(copyTimer.current);
    };
  }, []);
  async function copyEmail() {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText('sampat0choudhary@gmail.com');
      setCopyStatus('Email copied');
    } catch {
      setCopyStatus('Select the email address to copy it.');
    }
    copyTimer.current = setTimeout(() => setCopyStatus(''), 4000);
  }
  return (
    <Layout activeSection={activeSection}>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">
            <span className="status-dot" /> SOFTWARE ENGINEER. SYSTEMS THINKER.
          </p>
          <h1 id="hero-title">
            Complex systems.
            <br />
            <span className="accent">Human outcomes.</span>
          </h1>
          <p className="hero-description">
            I’m Sampat, a senior software engineer building at the intersection of{' '}
            <strong>AI, voice, and reliable infrastructure.</strong> Turning hard problems into
            things that work beautifully.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#work">
              Explore my work <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <a
              className="button button-text"
              href="/sampat-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View résumé <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-person">
            <img src="/profile.webp" alt="" width="40" height="40" />
            <div>
              Currently building voice AI at <strong>Prodigal</strong>
              <span>Previously Microsoft · Based in Bangalore, India</span>
            </div>
          </div>
        </div>
        <SystemVisual />
        <div className="hero-bottom">
          <span className="eyebrow">A LITTLE CURIOSITY. A LOT OF ENGINEERING.</span>
          <Link to="/#work" className="scroll-link">
            Scroll to explore <ArrowDown size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <div className="credentials-strip">
        <div className="container credentials-inner">
          <span className="eyebrow">BUILT WITH GREAT TEAMS</span>
          <span className="company-wordmark prodigal-wordmark">
            prodigal<span className="accent">.</span>
          </span>
          <span className="company-wordmark">
            <span className="microsoft-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            Microsoft
          </span>
          <span className="company-wordmark ally-wordmark">
            ally<span className="muted">.io</span>
          </span>
          <span className="education-wordmark">
            <GraduationCap size={24} aria-hidden="true" />
            IIT Kanpur
          </span>
        </div>
      </div>
      <section className="section container" id="work">
        <FadeIn>
          <SectionHeading number="01" label="SELECTED WORK" title="Ideas, engineered into reality.">
            <p>
              A selection of systems I’ve built,
              <br className="desktop-break" /> problems I’ve solved, and things I’m exploring.
            </p>
          </SectionHeading>
        </FadeIn>
        <FadeIn>
          <article className="project-featured">
            <div className="project-copy">
              <p className="eyebrow accent">PRODIGAL / VOICE AI</p>
              <h3>
                More than a voice.
                <br />A system that listens.
              </h3>
              <p>
                Real-time conversations are messy. I build the orchestration that keeps AI agents
                responsive, context-aware, and reliable—even when people interrupt.
              </p>
              <div className="tags">
                <span>Real-time systems</span>
                <span>LLM orchestration</span>
                <span>Voice AI</span>
              </div>
              <Link to="/blog/handling-interruptions-in-voice-ai-agents" className="text-link">
                Inside the engineering <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div
              className="voice-visual"
              aria-label="Voice agent architecture: speech flows through transcription, an AI agent, and voice synthesis"
              role="img"
            >
              <div className="diagram-header">
                <span className="eyebrow">THE CONVERSATION LOOP</span>
                <span className="diagram-status">
                  <span className="status-dot" />
                  REAL-TIME
                </span>
              </div>
              <div className="waveform" aria-hidden="true">
                {Array.from({ length: 49 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      height: `${12 + Math.abs(Math.sin(i * 1.8) * Math.cos(i * 0.24)) * 65}px`,
                    }}
                  />
                ))}
              </div>
              <div className="pipeline" aria-hidden="true">
                <div>
                  <AudioLines size={19} />
                  <span>Speech</span>
                </div>
                <ArrowRight size={15} />
                <div>
                  <Braces size={19} />
                  <span>LLM agent</span>
                </div>
                <ArrowRight size={15} />
                <div>
                  <AudioLines size={19} />
                  <span>Voice</span>
                </div>
              </div>
              <div className="feedback-path" aria-hidden="true">
                <span>CONTEXT + TOOL EXECUTION</span>
              </div>
              <p className="diagram-caption">Human conversation. Engineered continuity.</p>
            </div>
          </article>
        </FadeIn>
        <div className="project-grid" id="projects">
          <FadeIn>
            <article className="project-card">
              <div className="project-art terminal-art" aria-hidden="true">
                <div className="terminal-title">
                  <span />
                  <span />
                  <span />
                  <span>agent / workspace</span>
                </div>
                <div className="terminal-lines">
                  <p>
                    <span className="accent">❯</span> understand the codebase
                  </p>
                  <p className="muted">↳ reading context and dependencies</p>
                  <p>
                    <span className="accent">❯</span> make a thoughtful change
                  </p>
                  <p className="muted">↳ edit → validate → iterate</p>
                  <p className="terminal-success">
                    <Check size={14} /> Built for the developer’s workflow.
                  </p>
                </div>
                <Terminal className="terminal-watermark" size={110} />
              </div>
              <div className="project-card-content">
                <p className="eyebrow">DEVELOPER TOOLS / SIDE PROJECT</p>
                <h3>A better loop for building.</h3>
                <p>
                  An agentic code assistant and companion CLI that bring AI-powered analysis and
                  code modification into the development workflow.
                </p>
                <div className="tags">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>LiteLLM</span>
                </div>
                <details className="project-details">
                  <summary>
                    Explore the project <ChevronDown size={17} aria-hidden="true" />
                  </summary>
                  <div>
                    <h4>Context before code.</h4>
                    <p>
                      The assistant integrates LangSmith APIs with FastAPI and LiteLLM to analyze
                      code and automate modifications. Context management and error handling help
                      preserve the integrity of the existing codebase.
                    </p>
                    <h4>A companion in the terminal.</h4>
                    <p>
                      The CLI interprets agent responses and executes the necessary actions in the
                      developer’s local environment, connecting the assistant to everyday
                      development work.
                    </p>
                  </div>
                </details>
              </div>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="project-card">
              <Link
                to="/blog/ai-video-pipeline-no-cloud"
                className="project-art video-art"
                aria-label="Read about the local AI video pipeline"
              >
                <span className="eyebrow art-label">FROM SCRIPT TO SCREEN</span>
                <div className="video-equation" aria-hidden="true">
                  <svg viewBox="0 0 120 100" fill="none">
                    <path d="M15 80H105L15 10V80Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 67H28V80" stroke="currentColor" />
                    <text x="53" y="95">
                      a
                    </text>
                    <text x="3" y="48">
                      b
                    </text>
                    <text x="65" y="40">
                      c
                    </text>
                  </svg>
                  <span>a² + b² = c²</span>
                </div>
                <div className="video-timeline" aria-hidden="true">
                  <span className="timeline-play">▶</span>
                  <div>
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>00:60</span>
                </div>
              </Link>
              <div className="project-card-content">
                <p className="eyebrow">CREATIVE ENGINEERING / EXPERIMENT</p>
                <h3>From a script to a story.</h3>
                <p>
                  A fully local AI video pipeline. Synthesized narration, synchronized animation,
                  and a finished explainer—all built with open-source tools.
                </p>
                <div className="tags">
                  <span>Kokoro TTS</span>
                  <span>GSAP</span>
                  <span>ffmpeg</span>
                </div>
                <Link className="text-link" to="/blog/ai-video-pipeline-no-cloud">
                  Read the build story <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container section">
          <FadeIn>
            <SectionHeading
              number="02"
              label="THE ENGINEER BEHIND THE CODE"
              title="Curiosity is the throughline."
            />
          </FadeIn>
          <div className="about-grid">
            <FadeIn className="portrait-wrap">
              <img
                src="/profile.webp"
                alt="Sampat Choudhary outdoors in the mountains"
                width="720"
                height="884"
                loading="lazy"
              />
              <div className="portrait-caption">
                <MapPin size={14} aria-hidden="true" />
                Bangalore, India<span>Always exploring.</span>
              </div>
            </FadeIn>
            <FadeIn className="about-copy">
              <p className="about-lead">
                I care about what happens
                <br className="desktop-break" />{' '}
                <span className="muted">after the happy path.</span>
              </p>
              <p>
                When a user interrupts an AI agent. When permissions span teams and organizations.
                When a system needs to earn someone’s trust, every single time.
              </p>
              <p>
                From building enterprise security at Microsoft to orchestrating real-time voice AI
                at Prodigal, I’m drawn to the problems where good engineering makes a meaningful
                difference.
              </p>
              <p>
                I like working across the stack, asking the extra question, and turning what I learn
                into something useful—whether that’s a production system, a side project, or a
                write-up.
              </p>
              <div className="education" id="education">
                <GraduationCap size={23} aria-hidden="true" />
                <div>
                  <strong>Indian Institute of Technology, Kanpur</strong>
                  <span>B.Tech, Electrical Engineering · 2016–2020</span>
                </div>
              </div>
              <a className="text-link" href="/sampat-resume.pdf" download>
                Download my résumé <Download size={17} aria-hidden="true" />
              </a>
            </FadeIn>
          </div>
          <div className="expertise-grid" id="skills">
            {skills.map(({ icon: Icon, title, text, tools }) => (
              <FadeIn key={title}>
                <div className="expertise-item">
                  <Icon size={24} className="accent" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span>{tools}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section container experience-section" id="experience">
        <FadeIn>
          <SectionHeading number="03" label="THE JOURNEY SO FAR" title="Built on experience.">
            <a href="/sampat-resume.pdf" className="text-link" target="_blank" rel="noreferrer">
              Full résumé <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </SectionHeading>
        </FadeIn>
        <div className="experience-list">
          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${job.role}`}>
              <details className="experience-row" open={i === 0}>
                <summary>
                  <span
                    className={`company-icon ${job.mark === 'ms' ? 'ms-icon' : ''}`}
                    aria-hidden="true"
                  >
                    {job.mark === 'ms' ? (
                      <span className="microsoft-mark">
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    ) : (
                      job.mark
                    )}
                  </span>
                  <span className="experience-company">
                    <strong>
                      {job.company}
                      {job.current && <span className="current-badge">CURRENT</span>}
                    </strong>
                    <span>{job.role}</span>
                  </span>
                  <span className="experience-date">{job.date}</span>
                  <ChevronDown className="details-chevron" size={20} aria-hidden="true" />
                </summary>
                <div className="experience-content">
                  <h3>{job.summary}</h3>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="eyebrow">{job.stack}</p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="recognition" id="achievements">
            <div className="recognition-mark" aria-hidden="true">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="eyebrow accent">A LITTLE RECOGNITION</p>
              <h3>Inventing better ways to work.</h3>
              <p>
                Named on Microsoft patent <strong>MS 412647-US-NP</strong> for “Dynamic Control of
                Multi-Nested OKR Alignment.” Authentication and permissions SME, mentor to interns
                and new engineers.
              </p>
            </div>
            <span className="recognition-index" aria-hidden="true">
              ↗
            </span>
          </div>
        </FadeIn>
      </section>
      <section className="section writing-section container" id="writing">
        <FadeIn>
          <SectionHeading
            number="04"
            label="NOTES FROM THE WORKBENCH"
            title="Building. Learning. Writing."
          >
            <Link to="/blog" className="text-link">
              All writing <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </SectionHeading>
        </FadeIn>
        <div className="article-list">
          {posts.slice(0, 2).map((post, i) => (
            <FadeIn key={post.slug}>
              <ArticleCard post={post} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">
              <span className="status-dot" />
              OPEN TO INTERESTING CONVERSATIONS
            </p>
            <div className="contact-main">
              <h2>
                Good things start
                <br />
                with a <span>conversation.</span>
              </h2>
              <a
                href="mailto:sampat0choudhary@gmail.com"
                className="contact-arrow"
                aria-label="Email Sampat"
              >
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <p>Have a hard problem, a big idea, or just a hello?</p>
                <div className="email-row">
                  <a href="mailto:sampat0choudhary@gmail.com">sampat0choudhary@gmail.com</a>
                  <button
                    className="icon-button copy-email"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    {copyStatus === 'Email copied' ? (
                      <Check size={18} aria-hidden="true" />
                    ) : (
                      <Copy size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
                <span className="copy-status" role="status">
                  {copyStatus}
                </span>
              </div>
              <div className="contact-socials">
                <a href="https://github.com/pilot617" target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sampat-choudhary-996b75155/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href="tel:+919251374401">
                  Call me <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
