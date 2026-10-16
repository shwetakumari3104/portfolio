import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shwetakumari311204@gmail.com",
    href: "mailto:shwetakumari311204@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7258956740",
    href: "tel:+917258956740",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shweta-kumari-4b4603297",
    href: "https://www.linkedin.com/in/shweta-kumari-4b4603297/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get in Touch
            </p>
            <h1
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Let's Start a</span>
              <br />
              <span className="text-neutral-500">Conversation</span>
            </h1>
            <p
              className="text-lg text-neutral-400 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Have a project in mind or just want to chat about technology? 
              I'm always open to discussing new ideas and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Light */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-display font-bold mb-8 text-neutral-950">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-neutral-600"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-neutral-50 border-neutral-200 focus:border-neutral-950 text-neutral-950"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-neutral-600"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-neutral-50 border-neutral-200 focus:border-neutral-950 text-neutral-950"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-neutral-600"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-neutral-50 border-neutral-200 focus:border-neutral-950 text-neutral-950"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-neutral-600"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-neutral-50 border-neutral-200 focus:border-neutral-950 resize-none text-neutral-950"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto gap-2 bg-neutral-950 text-white hover:bg-neutral-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl font-display font-bold mb-8 text-neutral-950">Contact Info</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0 group-hover:border-neutral-400 transition-colors">
                      <info.icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-950 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-neutral-950 hover:text-neutral-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-neutral-950">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-12 border-t border-neutral-200">
                <h3 className="text-lg font-display font-semibold mb-6 text-neutral-950">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Shweta311204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-950 hover:border-neutral-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shweta-kumari-4b4603297/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-950 hover:border-neutral-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:shwetakumari311204@gmail.com"
                    className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-950 hover:border-neutral-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-12 p-6 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-neutral-950">Available for opportunities</span>
                </div>
                <p className="text-sm text-neutral-600">
                  I'm currently open to internship opportunities and freelance projects. 
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
