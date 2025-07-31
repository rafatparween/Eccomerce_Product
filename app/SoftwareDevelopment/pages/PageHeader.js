// "use client";
// import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import Link from "next/link";

// export default function PageHeader() {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleRedirect = () => {
//     window.open("https://www.printersmartassistant.com/", "_blank");
//   };

//   return (
//     <div className="flex flex-col items-center w-full ">
//       {/* Navigation Bar - completely unchanged desktop view */}
//       <nav className="bg-[#1C8DCEED] text-white w-full">
//         <div className="max-w-[90.33%] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16">
//             {/* Mobile menu button - only visible on mobile */}
//             <button
//               className="md:hidden text-white text-3xl"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <FiMenu />
//             </button>

//             {/* Your original desktop navigation - untouched */}
//             <div className="hidden md:flex justify-between items-center w-full">
//               {[
//                 "Printer Offline",
//                 "Printer Setup",
//                 "Scanner Setup",
//                 "Support Home",
//                 "Ink Cartridges Issue",
//                 "Diagnostics",
//                 "Business Support",
//               ].map((item, index) => (
//                 <button 
//                   key={index}
//                   className="hover:text-gray-300 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap px-3"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile menu - only visible on mobile */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
//       )}
      
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-[#1C8DCEED] text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out z-50 md:hidden`}
//       >
//         <div className="h-16 flex items-center justify-end pr-4">
//           <button
//             className="text-white text-3xl"
//             onClick={() => setIsOpen(false)}
//           >
//             ✕
//           </button>
//         </div>
//         <div className="flex flex-col space-y-6 px-6">
//           {[
//             "Printer Offline",
//             "Printer Setup",
//             "Scanner Setup",
//             "Support Home",
//             "Ink Cartridges Issue",
//             "Diagnostics",
//             "Business Support",
//           ].map((item, index) => (
//             <Link
//               key={index}
//               href="#"
//               className="block text-lg font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function PageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    window.open("https://www.printersmartassistant.com/", "_blank");
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Navigation Bar - completely unchanged desktop view */}
      <nav className="bg-[#1C8DCEED] text-white w-full">
        <div className="max-w-[90.33%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16">
            {/* Mobile menu button - only visible on mobile */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <FiMenu />
            </button>

            {/* Your original desktop navigation - untouched */}
            <div className="hidden md:flex justify-between items-center w-full">
              {[
                "Printer Offline",
                "Printer Setup",
                "Scanner Setup",
                "Support Home",
                "Ink Cartridges Issue",
                "Diagnostics",
                "Business Support",
              ].map((item, index) => (
                <button 
                  key={index}
                  className="hover:text-gray-300 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap px-3"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - only visible on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
          role="presentation"
        />
      )}
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1C8DCEED] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="h-16 flex items-center justify-end pr-4">
          <button
            className="text-white text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col px-6">
          {[
            "Printer Offline",
            "Printer Setup",
            "Scanner Setup",
            "Support Home",
            "Ink Cartridges Issue",
            "Diagnostics",
            "Business Support",
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              className="block py-4 text-lg font-medium border-b border-[#0C71C3] last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}