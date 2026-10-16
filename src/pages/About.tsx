import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { GraduationCap, Award, Users, FileCode, Brush, X } from "lucide-react";

const education = [
  {
    institution: "Bangalore Institute of Technology",
    location: "Bengaluru, India",
    degree: "Computer Science Engineering",
    period: "2023 - 2027 (expected)",
    grade: "CGPA: 9.24",
  },
  {
    institution: "Shivam Convent",
    location: "Patna, Bihar",
    degree: "AISSCE (Class XII)",
    period: "2021 - 2022",
    grade: "Aggregate: 92.6%",
  },
  {
    institution: "BD Public School",
    location: "Patna, Bihar",
    degree: "AISSE (Class X)",
    period: "2019 - 2020",
    grade: "Aggregate: 98.2%",
  },
];

const skills = {
  programming: ["C", "Python", "Java"],
  web: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  databases: ["DBMS", "SQL"],
  core: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "Software Engineering"],
  tools: ["Git", "Figma", "Streamlit"],
};

const achievements = [
  {
    icon: Award,
    title: "Constellation Prize - Ideaverse 2025",
    description:
      "Awarded for presenting a group prototype of Aroviaa, an AI-powered medical diagnosis tool.",
  },
  {
    icon: FileCode,
    title: "GirlScript Summer of Code",
    description:
      "Contributed to open-source projects with frontend enhancements and feature improvements (2024 & 2025).",
  },
  {
    icon: Users,
    title: "TEDx BIT Bangalore",
    description:
      "Creative Team Member (May 2024 – May 2025), assisting in event planning, branding, and visual content creation for a successfully organized TED event.",
  },
  {
    icon: FileCode,
    title: "SDI Content Writer",
    description:
      "Content Writer for SDI (Student Developers’ Initiative), the official CSE department club, preparing technical content, event summaries, and write-ups for community-driven workshops.",
  },
];

// Put your images in public/art/ with these names (or change the src paths).
const artworks = [
  { src: `${import.meta.env.BASE_URL}art/art-1.jpeg`, title: "Untitled I", medium: "Charcoal on paper" },
  { src: `${import.meta.env.BASE_URL}art/art-2.jpeg`, title: "Untitled II", medium: "Graphite on paper" },
  { src: `${import.meta.env.BASE_URL}art/art-3.jpeg`, title: "Untitled III", medium: "Acrylic on canvas" },
  { src: `${import.meta.env.BASE_URL}art/art-4.jpeg`, title: "Untitled IV", medium: "Charcoal on paper" },
];

export default function About() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Dark */}
      <section className="py-24 md:py-32 bg-neutral-950 pt-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-12">
          <div className="max-w-3xl">
            <p
              className="text-neutral-500 text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              About Me
            </p>
            <h1
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Crafting Digital</span>
              <br />
              <span className="text-neutral-500">Experiences</span>
            </h1>
            <p
              className="text-lg text-neutral-400 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Final year Computer Science undergraduate with hands-on experience in full-stack development, 
              AI-driven applications, and data analytics. Skilled at designing scalable systems, 
              building responsive UIs, and integrating APIs. Experienced in team-based development 
              and contributing to open-source projects, with a strong focus on delivering 
              user-focused, practical solutions.
            </p>
          </div>
          {/* Your photo: put it at public/me.jpeg */}
          <figure
            className="opacity-0 animate-fade-in mx-auto md:mx-0"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}me.JPG`}
              alt="Shweta Kumari"
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover"
              onError={(e) => {
                const fig = e.currentTarget.parentElement;
                if (fig) fig.style.display = "none";
              }}
            />
          </figure>
          </div>
        </div>
      </section>

      {/* Who I Am / Becoming - Light */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-200 rounded-lg">
              <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Who I am</p>
              <p className="text-neutral-600 leading-relaxed">
                A final-year CS student at BIT Bengaluru who loves turning messy problems into
                clean, working products. I build full-stack and AI-driven apps, and I care as much
                about the person using them as the system underneath. Away from the screen, I draw and
                paint: charcoal, graphite, and canvas.
              </p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-lg">
              <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Who I'm becoming</p>
              <p className="text-neutral-600 leading-relaxed">
                An engineer who ships reliable, thoughtful software at scale, and keeps making room
                for other students through open source, writing, and community work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Light */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-8 h-8 text-neutral-400" />
            <h2 className="text-3xl font-display font-bold text-neutral-950">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="group relative pl-8 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-white border-2 border-neutral-200 group-hover:border-neutral-950 group-hover:bg-neutral-950 transition-colors" />
                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-display font-semibold text-neutral-950">{edu.institution}</h3>
                    <span className="text-sm text-neutral-500">{edu.period}</span>
                  </div>
                  <p className="text-neutral-600">{edu.degree}</p>
                  <p className="text-sm text-neutral-500 mt-1">{edu.location}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs bg-neutral-100 rounded-full text-neutral-700 font-medium">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Dark */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-12 text-white">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                  {category === "web"
                    ? "Web Technologies"
                    : category === "core"
                    ? "Core Concepts"
                    : category === "tools"
                    ? "Tools & Platforms"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 border border-neutral-700 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Light */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-12 text-neutral-950">Achievements & Activities</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group p-6 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <achievement.icon className="w-8 h-8 mb-4 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                <h3 className="text-lg font-display font-semibold mb-2 text-neutral-950">{achievement.title}</h3>
                <p className="text-neutral-500 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the code - Dark gallery */}
      <section className="py-24 bg-neutral-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-neutral-500 text-sm uppercase tracking-[0.3em] mb-4">Beyond the code</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            The art <span className="text-neutral-500">side</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-16">
            When I'm not building, I'm drawing and painting. It keeps me patient, observant,
            and a little messier than my code.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {artworks.map((a, i) => (
              <button
                key={a.src}
                onClick={() => setOpen(i)}
                className={`group text-left focus:outline-none ${i % 2 === 1 ? "md:mt-14" : ""}`}
                aria-label={`View ${a.title}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 flex items-center justify-center">
                  <Brush className="w-8 h-8 text-neutral-700" />
                  <img
                    src={a.src}
                    alt={a.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-6"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute top-6 right-6 text-neutral-300 hover:text-white" aria-label="Close">
            <X size={28} />
          </button>
          <img
            src={artworks[open].src}
            alt={artworks[open].title}
            className="max-h-[80vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-white font-display font-semibold">{artworks[open].title}</p>
          <p className="text-xs uppercase tracking-wider text-neutral-400">{artworks[open].medium}</p>
        </div>
      )}
    </Layout>
  );
}
