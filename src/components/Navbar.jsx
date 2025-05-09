import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Asset2xxxhdpi from '/assets/Asset 2xxxhdpi.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Services', path: '/Services' },
    { name: 'Portfolio', path: '/Portfolio' },
    { name: 'Contact', path: '/Contact' },
  ];

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-black/80 backdrop-blur-md`}
    >
      {/* Logo */}
      <div className="text-xl font-bold ">
        <a href="#"><img src={Asset2xxxhdpi} alt="Radiance Logo" className="w-16 h-16" /></a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center w-full relative z-50 ">
  <div className="nav">
    <div className="container">
      {navLinks.map((link) => (
        <Link key={link.name} to={link.path} className="btn ">
          {link.name}
        </Link>
      ))}
      <svg
        className="outline"
        width="100%"
        height="100%"
        viewBox="0 0 500 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          className="rect"
          pathLength="100"
          x="0"
          y="0"
          width="500"
          height="60"
          fill="transparent"
          strokeWidth="5"
        />
      </svg>
    </div>
  </div>
</nav>


      {/* Mobile Toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black md:hidden flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
