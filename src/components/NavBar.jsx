import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Girman Technologies" className="h-8" />
          <span className="text-xl font-semibold">Girman Technologies</span>
        </Link>
        <div className="flex gap-6">
          <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-gray-900">Website</a>
          <a href="https://linkedin.com/company/girman-technologies" target="_blank" 
             rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          <a href="mailto:contact@girmantech.com" 
             className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
