import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200 mt-[70px]">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p>Email: support@textutor.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div>
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link href="/dashboard" className="hover:text-gray-500">Dashboard</Link></li>
            <li><Link href="/workspaces" className="hover:text-gray-500">Workspaces</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Follow Us</h4>
          <p>Stay connected for updates:</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-center p-4 text-gray-600">
        &copy; 2024 Textutor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
