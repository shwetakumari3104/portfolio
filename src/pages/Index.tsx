import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download, Mail, Code2, Database, Palette } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Code2, label: "Full-Stack Development", desc: "React, Python, FastAPI" },
  { icon: Database, label: "Database Design", desc: "SQL, MongoDB, NoSQL" },
  { icon: Palette, label: "UI/UX Design", desc: "Figma, Tailwind CSS" },
];

const featured = [
  {
    title: "Crimora",
    tag: "Crime Analytics",
    desc: "A secure web platform for crime data reporting, visualization, and predictive analytics with interactive dashboards.",
    tech: ["Python", "Streamlit", "SQL", "Pandas"],
    live: "https://crimora-qm54.onrender.com/",
  },
  {
    title: "Moods",
    tag: "AI Entertainment",
    desc: "Mood-based entertainment recommendation platform powered by GPT-4 for real-time mood detection.",
    tech: ["React", "FastAPI", "MongoDB", "OpenAI"],
    live: "https://moods-vxqc.onrender.com/",
  },
  {
    title: "BehaviorDrift",
    tag: "ML Anomaly Detection",
    desc: "ML-based GitHub repository anomaly detection with a rolling-baseline Isolation Forest and LLM-written reports.",
    tech: ["Python", "FastAPI", "React", "scikit-learn"],
    live: "https://behaviordrift.onrender.com/",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section - Dark */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-950 pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neutral-800/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-neutral-400 text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Computer Science Engineer
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Shweta</span>
              <br />
              <span className="text-neutral-500">Kumari</span>
            </h1>
            <p
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Full-stack developer passionate about building AI-driven applications 
              and scalable systems. Transforming ideas into elegant, user-focused solutions.
              <span className="block mt-3 text-neutral-500 italic">Turning messy problems into clean, working products.</span>
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="bg-white text-neutral-950 hover:bg-neutral-200 group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-neutral-600 text-white hover:bg-neutral-800 hover:text-white">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-neutral-300 hover:bg-neutral-800 hover:text-white">
                <a href="/Shweta_Kumari_Resume.pdf" download="Shweta_Kumari_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview - Light */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="group p-8 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <skill.icon className="w-10 h-10 mb-6 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                <h3 className="text-xl font-display font-semibold mb-2 text-neutral-950">{skill.label}</h3>
                <p className="text-neutral-500 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview - Dark */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Featured Work</h2>
            <Link
              to="/projects"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p) => (
              <a
                key={p.title}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} live demo`}
                className="group relative block overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-600 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-800/30 rounded-full blur-2xl group-hover:bg-neutral-700/50 transition-colors" />
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-neutral-500 group-hover:text-white transition-colors" />
                <span className="text-xs uppercase tracking-wider text-neutral-500">
                  {p.tag}
                </span>
                <h3 className="text-2xl font-display font-bold mt-3 mb-4 text-white">{p.title}</h3>
                <p className="text-neutral-400 mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-neutral-800 rounded-full text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600">
            <span className="relative flex h-2 w-2">
            </span>
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-neutral-950">
            Let's Build Something
            <br />
            <span className="text-neutral-400">Together</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your visions.
          </p>
          <Button asChild size="lg" className="bg-neutral-950 text-white hover:bg-neutral-800">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
