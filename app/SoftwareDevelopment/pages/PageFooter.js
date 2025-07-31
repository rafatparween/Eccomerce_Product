
// 'use client';

// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const PageFooter = () => {
//   return (
//     <footer className="bg-black text-gray-300 text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Main Footer Content */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           {/* Brand Name */}
//           <div className="text-white font-bold">Hewlett Printers Solution</div>

//           {/* Quick Links - Single Row */}
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link href="/.." className="hover:text-white transition-colors">Home</Link>
//             <Link href="/about" className="hover:text-white transition-colors">About</Link>
//             <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
//             <Link href="/service" className="hover:text-white transition-colors">Services</Link>
//             <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
//             <Link href="/term" className="hover:text-white transition-colors">Terms and Conditions</Link>
//             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-3">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <FaFacebook size={16} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <FaTwitter size={16} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <FaInstagram size={16} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <FaYoutube size={16} />
//             </a>
//           </div>
//         </div>

//         {/* Copyright - Tiny Text */}
//         <div className="mt-4 pt-3 border-t border-gray-800 text-center text-xs text-gray-500">
//           © {new Date().getFullYear()}Hewlett Printers Solution. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default PageFooter;



// 'use client';

// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const PageFooter = () => {
//   return (
//     <footer className="bg-black text-gray-300 text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Main Footer Content */}

//         {/* Footer Bottom Text - Matches Screenshot */}
//         <div className="mt-4 pt-3  text-center text-xs text-gray-400 space-y-1">
//           <p>
//             © 2025 <span className="text-white">Hewlett Hub Solutions</span>. All Rights Reserved.
//           </p>
//           <p>
//             Not affiliated with HP, Canon, Epson, or any other printer brand.
//           </p>
//           <p className="space-x-2">
//             <Link href="/term" className="hover:text-white">Terms</Link> |
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> |
//             <Link href="/refunds" className="hover:text-white">Refunds</Link> |
//             <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link> |
//             <Link href="/contact" className="hover:text-white">Contact Us</Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default PageFooter;



'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const PageFooter = () => {
  return (
    <footer className="bg-black text-gray-300 font-mono text-[17px]">
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col items-center">

        {/* Top Text - Bold & Centered */}
        <div className="text-center text-[18px] font-semibold leading-relaxed text-gray-300 mb-5 px-2">
          © <span className="text-orange-400">2025</span> Hewlett Hub Solutions. All Rights Reserved. — Not affiliated with HP, Canon, Epson, or any other printer brand.
        </div>

        {/* Centered Links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-400 text-[17px] mb-6">
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span className="text-gray-600">|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="text-gray-600">|</span>
          <Link href="/refund" className="hover:text-white transition-colors">Refunds</Link>
          <span className="text-gray-600">|</span>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <span className="text-gray-600">|</span>
          <Link href="/contacts" className="hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Social Icons at the Bottom */}
        <div className="flex justify-center space-x-6 mt-auto">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <FaYoutube size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default PageFooter;
