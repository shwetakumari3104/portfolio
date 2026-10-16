import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") === "dark";
      setIsDark(saved);
      document.documentElement.classList.toggle("dark", saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Navigation - Always Dark */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-neutral-950 ${
          isScrolled ? "py-4 shadow-lg" : "py-6"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display font-bold tracking-tight text-white hover:text-neutral-400 transition-colors"
          >
            SK.
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors hover:text-white ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-neutral-400"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-400 hover:text-white transition-colors md:order-last"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-t border-neutral-800">
            <ul className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block text-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-white"
                        : "text-neutral-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer - Always Dark */}
      <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Shweta Kumari. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Shweta311204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shweta-kumari-4b4603297/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shwetakumari311204@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}