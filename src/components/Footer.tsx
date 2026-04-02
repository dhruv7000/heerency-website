const Footer = () => {
    return (
      <footer className="bg-black border-t border-gray-800 py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Heerency Creation
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              Premium interior design solutions for modern living.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">
              📧 info@heerency.com
            </p>
            <p className="text-gray-400 text-sm mt-2">
              📞 +91 99999 99999
            </p>
          </div>
        </div>
  
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Heerency Creation. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;