import Layout from "@/components/Layout";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Crimora",
    subtitle: "Crime Reporting & Analytical Platform",
    description:
      "A secure web platform for crime data reporting, visualization, and predictive analytics, with dashboards that surface trends and hotspots.",
    features: [
      "Developed a secure web platform for crime data reporting, visualization, and predictive analytics",
      "Enforced user authentication, session logging, and dashboards to detect predictive trends and identify hotspots",
      "Designed and normalized a relational database schema (3NF) for efficient storage and retrieval of data",
    ],
    tech: ["Python", "Streamlit", "SQL", "Pandas", "Altair", "Plotly"],
    github: "https://github.com/Shweta311204/Crimora_1",
    live: "https://crimora-qm54.onrender.com/",
    image: "/projects/crimora.png",
  },
  {
    title: "Moods",
    subtitle: "Mood-based Entertainment Recommendation Platform",
    description:
      "A full-stack web application that detects user mood with AI and recommends personalized entertainment content.",
    features: [
      "Built with a React frontend and Python FastAPI backend, implementing 3 core API endpoints for mood analysis and content recommendations",
      "Integrated OpenAI GPT-4 API for natural language processing, enabling real-time mood detection across 10+ emotion categories",
      "Designed a responsive UI with Tailwind CSS featuring 10+ interactive mood selection options and dynamic content filtering",
      "Applied NoSQL architecture using MongoDB and Motor async driver, with proper error handling and fallback mechanisms",
    ],
    tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB", "OpenAI GPT-4"],
    github: "https://github.com/Shweta311204/Mood",
    live: "https://moods-vxqc.onrender.com/",
    image: "/projects/moods.png",
  },
  {
    title: "BehaviorDrift",
    subtitle: "ML-Based GitHub Repository Anomaly Detection Platform",
    description:
      "A full-stack anomaly detection system that spots unusual behavior in GitHub repositories using a rolling-baseline ML pipeline and automated LLM-written reports.",
    features: [
      "Architected a modular pipeline separating data collection, feature engineering, ML inference, and reporting into independently testable components",
      "Built a rolling-baseline Isolation Forest (scikit-learn) on a 4-dimensional feature vector per time window to prevent data leakage across temporal splits",
      "Implemented a resilient 3-tier LLM integration (Claude → Gemini → deterministic template fallback) for report generation",
      "Added a pluggable persistence layer supporting Qdrant in production and a local JSON fallback for fully offline use",
      "Achieved high test coverage across 7 core modules with a fully mocked pytest suite",
    ],
    tech: ["Python", "FastAPI", "React", "Vite", "Tailwind CSS", "scikit-learn", "Qdrant", "pytest"],
    github: "https://github.com/Shweta311204/BehaviorDrift",
    live: "https://behaviordrift.onrender.com/",
    image: "/projects/behaviordrift.png",
  },
];

export default function Projects() {
  return (
    <Layout>
      {/* Hero Section - Dark */}
      <section className="py-24 md:py-32 bg-neutral-950 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p
              className="text-neutral-500 text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Portfolio
            </p>
            <h1
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Featured</span>
              <br />
              <span className="text-neutral-500">Projects</span>
            </h1>
            <p
              className="text-lg text-neutral-400 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              A collection of projects showcasing my expertise in full-stack development, 
              AI integration, and data analytics. Each project represents a unique challenge 
              and a creative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects - Alternating Light/Dark */}
      {projects.map((project, index) => {
        const isDark = index % 2 === 1;
        return (
          <section
            key={project.title}
            className={`py-24 ${isDark ? "bg-neutral-950" : "bg-white"}`}
          >
            <div className="container mx-auto px-6">
              <article
                className="grid lg:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {/* Project Image Placeholder */}
                <div
                  className={`relative aspect-video rounded-lg overflow-hidden border ${
                    isDark ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-neutral-100"
                  } ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        isDark ? "bg-neutral-800" : "bg-neutral-200"
                      }`}>
                        <span className={`text-4xl font-display font-bold ${
                          isDark ? "text-neutral-500" : "text-neutral-400"
                        }`}>
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className={isDark ? "text-neutral-500" : "text-neutral-400"}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className={`absolute top-4 right-4 w-32 h-32 rounded-full blur-2xl ${
                    isDark ? "bg-neutral-800/30" : "bg-neutral-200/50"
                  }`} />
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Project Details */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className={`text-xs uppercase tracking-wider ${
                    isDark ? "text-neutral-500" : "text-neutral-400"
                  }`}>
                    {project.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
                    isDark ? "text-white" : "text-neutral-950"
                  }`}>
                    {project.title}
                  </h2>
                  <p className={`mb-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${
                          isDark ? "text-neutral-400" : "text-neutral-600"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          isDark ? "bg-white" : "bg-neutral-950"
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDark 
                            ? "bg-neutral-800 text-neutral-400" 
                            : "bg-neutral-100 text-neutral-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className={`gap-2 bg-transparent ${
                        isDark
                          ? "border-neutral-600 text-white hover:bg-neutral-800 hover:text-white"
                          : "border-neutral-300 text-neutral-950 hover:bg-neutral-100 hover:text-neutral-950"
                      }`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className={`gap-2 ${
                        isDark
                          ? "bg-white text-neutral-950 hover:bg-neutral-200"
                          : "bg-neutral-950 text-white hover:bg-neutral-800"
                      }`}
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        );
      })}

      {/* Open Source Contributions - Dark */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-8 text-white">Open Source Contributions</h2>
          <div className="p-8 border border-neutral-800 rounded-lg bg-neutral-900">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                <Github className="w-6 h-6 text-neutral-400" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">
                  GirlScript Summer of Code (GSSOC)
                </h3>
                <p className="text-neutral-400 mb-4">
                  Active contributor focusing on frontend enhancements and minor feature 
                  improvements. Participated in GSSOC 2024 & 2025, collaborating with 
                  developers worldwide on various open-source projects.
                </p>
                <span className="text-xs uppercase tracking-wider text-neutral-500">
                  2024 - 2025 • Contributor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}