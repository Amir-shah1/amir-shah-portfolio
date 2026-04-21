/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Network, 
  Cloud, 
  Globe, 
  Code2, 
  Database,
  ChevronRight
} from "lucide-react";

const PROJECTS = [
  {
    title: "Abbott Home Tuition Website",
    github: "https://github.com/Amir-shah1/Abbott-home-tuition-website.git",
    description: "Developed a robust and functional web platform for home tuition services, facilitating seamless tutor-student connections.",
    achievement: "Secured 2nd position in an inter-subject competition in Web Technologies.",
    tags: ["HTML", "CSS", "JS", "Responsive"],
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "WatchWise – Movie Recommendation System",
    github: "https://github.com/Amir-shah1/Movie-Recommendation-System-WatchWise.git",
    description: "Built an intelligent recommendation system that suggests movies based on collaborative filtering and user preferences.",
    achievement: "Secured 1st position in Artificial Intelligence.",
    tags: ["AI", "Python", "Data Analysis"],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Data Structure Visualizer",
    github: "https://github.com/Amir-shah1/Data_Structure_Visualizer.git",
    description: "Created an interactive educational tool to demonstrate core data structures and their behavior through real-time visualization.",
    achievement: "Secured 3rd position in Data Structures.",
    tags: ["Java", "Algorithms", "Visualizer"],
    icon: <Terminal className="w-6 h-6" />
  }
];

const SKILLS = [
  { name: "Networking Fundamentals", icon: <Network className="w-5 h-5" />, level: "Advanced" },
  { name: "AWS", icon: <Cloud className="w-5 h-5" />, level: "Basic" },
  { name: "Linux", icon: <Terminal className="w-5 h-5" />, level: "Intermediate" },
  { name: "Java", icon: <Code2 className="w-5 h-5" />, level: "Intermediate" },
  { name: "Python", icon: <Code2 className="w-5 h-5" />, level: "Basic" },
  { name: "HTML / CSS / JS", icon: <Globe className="w-5 h-5" />, level: "Advanced" },
  { name: "Database Management", icon: <Database className="w-5 h-5" />, level: "Intermediate" },
];

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-[#f8fafc] selection:bg-sky-500/30">
      {/* Sidebar - Desktop Only */}
      <aside className="sidebar fixed left-0 top-0 h-full p-8 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-1"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white leading-none">Amir Shah</h1>
            <p className="text-sky-400 mono text-sm font-medium">Aspiring Cloud & Networking Engineer</p>
          </motion.div>

          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-0 group-hover:w-4 h-px bg-sky-400 transition-all duration-300"></span>
              01. ABOUT
            </a>
            <a href="#skills" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-0 group-hover:w-4 h-px bg-sky-400 transition-all duration-300"></span>
              02. SKILLS
            </a>
            <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-0 group-hover:w-4 h-px bg-sky-400 transition-all duration-300"></span>
              03. PROJECTS
            </a>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-0 group-hover:w-4 h-px bg-sky-400 transition-all duration-300"></span>
              04. CONTACT
            </a>
          </nav>

          {/* Sidebar Sections */}
          <div className="space-y-8 pr-4">
            <section id="about">
              <h2 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Background</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                5th semester Computer Science student at COMSATS Abbottabad. 
                Focused on building practical cloud systems and high-performance networks. 
                Developing proficiency in AWS, Linux, and scalable infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Current Focus</h2>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-sky-500 rounded-full"></span> AWS Cloud Practitioner Pathway
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-sky-500 rounded-full"></span> Enterprise Network Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-sky-500 rounded-full"></span> Linux System Administration
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer Info */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Connectivity</div>
            <div className="flex gap-4">
              <a href="https://github.com/Amir-shah1" target="_blank" rel="noreferrer" className="p-2.5 rounded-md glass-card hover:text-sky-400 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/amir-shah-" target="_blank" rel="noreferrer" className="p-2.5 rounded-md glass-card hover:text-sky-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:amirshah191623@gmail.com" className="p-2.5 rounded-md glass-card hover:text-sky-400 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-[10px] text-slate-600 mono leading-relaxed max-w-[200px]">
            Built with focus on learning, consistency, and real-world problem solving.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[320px] p-8 lg:p-12 space-y-24 max-w-5xl">
        {/* Mobile Header */}
        <div className="lg:hidden flex flex-col gap-4 mb-12">
          <h1 className="text-3xl font-bold text-white">Amir Shah</h1>
          <p className="text-sky-400 mono text-sm font-medium">Aspiring Cloud & Networking Engineer</p>
          <div className="flex gap-4">
            <a href="#about" className="text-xs text-slate-500 font-bold uppercase transition-colors hover:text-white">About</a>
            <a href="#projects" className="text-xs text-slate-500 font-bold uppercase transition-colors hover:text-white">Projects</a>
            <a href="#contact" className="text-xs text-slate-500 font-bold uppercase transition-colors hover:text-white">Contact</a>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
              <p className="text-sm text-slate-500">Verified hands-on technical competencies</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end max-w-lg">
              {SKILLS.map(skill => (
                <span key={skill.name} className="skill-tag flex items-center gap-1.5 transition-colors hover:border-sky-500">
                  <span className="text-sky-500 scale-75">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </header>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Featured Projects</h3>
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card project-card p-6 rounded-xl flex flex-col justify-between group h-full hover:shadow-2xl hover:shadow-sky-500/5"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h4>
                    <span className="achievement-badge text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-widest flex-shrink-0">
                      {project.achievement}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
                  <div className="flex gap-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] mono text-slate-500 italic">#{tag.toLowerCase()}</span>
                    ))}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-sky-400 font-bold hover:text-white transition-colors flex items-center gap-1"
                  >
                    REPOSITORY <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Final Call */}
        <section id="contact" className="py-12">
          <div className="glass-card p-10 rounded-2xl border-dashed border-sky-500/20 text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Let's build something significant</h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Currently open for network consulting, cloud architecture roles, or academic collaboration. 
              Efficiency and architectural integrity are my priorities.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="mailto:amirshah191623@gmail.com"
                className="px-8 py-3 bg-sky-500 text-black font-bold rounded-lg hover:bg-sky-400 transition-all text-sm uppercase tracking-widest"
              >
                Establish Connection
              </a>
              <p className="text-xs text-slate-600 font-mono italic">amirshah191623@gmail.com</p>
            </div>
          </div>
        </section>

        <footer className="pt-12 pb-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] mono uppercase tracking-widest">
          <div>© {new Date().getFullYear()} System Core v1.0</div>
          <div>Amir Shah — Abbottabad, PK</div>
        </footer>
      </main>
    </div>
  );
}
