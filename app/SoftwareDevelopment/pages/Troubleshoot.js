// "use client"
// import Image from "next/image";
// import { useRouter } from 'next/navigation'; 

// export default function Troubleshoot() {
//   const router = useRouter(); 

//   const handleSetupClick = () => {
//     // router.push('../service/Pages'); // Ensure the path is correct
//   };
//   return (
//     <div className="bg-white h-[430px] flex flex-col items-center justify-center px-4 py-10">
//       <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full ">
//         {/* Left: Devices */}
//   <div className="flex flex-col items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
//   <Image
//     src="/newsetup.png"
//     alt="Printer"
//     width={539}
//     height={347}
//     className="object-contain"
//   />
//   <button 
//     className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200"
//     onClick={handleSetupClick}
//   >
//      {/* Click Here For Printer Setup */}
//      Click Here For Printer Setup
//   </button>
// </div>

//         {/* Right: Text */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//         <p className="text-[40px] font- text-black mb-2 ">Diagnose and solve</p>
//   <div className="flex items-start justify-center lg:justify-start mb-4">
    
    
//     <h1 className="text-[29px] text-black">
//       Contact Support – Chat Live
//     </h1>
//   </div>

//   {/* Paragraph */}
//   <p className="text-[20px] text-black leading-relaxed mb-2">
//     In this support hub, you’ll find quick access to live assistance for common computer and printer issues.
//   </p>
//   <p className="text-[20px] text-black leading-relaxed">
//     Click the tabs to switch between <span className="font-bold">Computer</span> and <span className="font-bold">Printer</span> topics,
//     <br/>
//     Then start a live chat with a support agent.
//   </p>
// </div>

//       </div>
//     </div>
//   )
// }



// "use client"
// import Image from "next/image";
// import { useRouter } from 'next/navigation'; 

// export default function Troubleshoot() {
//   const router = useRouter(); 

//   const handleSetupClick = () => {
//     router.push('../service/Pages'); // Ensure the path is correct
//   };
//   return (
//     <div className="bg-white min-h-[430px] flex flex-col items-center justify-center px-4 py-10">
//       <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full">
//         {/* Left: Devices - unchanged desktop, responsive mobile */}
//         <div className="flex flex-col items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
//           <Image
//             src="/newsetup.png"
//             alt="Printer"
//             width={539}
//             height={347}
//             className="object-contain w-full max-w-[300px] lg:max-w-none"
//           />
//           <button 
//             className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200 w-full sm:w-auto"
//             onClick={handleSetupClick}
//           >
//             Click Here For Printer Setup
//           </button>
//         </div>

//         {/* Right: Text - unchanged desktop, responsive mobile */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <p className="text-3xl lg:text-[40px] font- text-black mb-2">Diagnose and solve</p>
//           <div className="flex items-start justify-center lg:justify-start mb-4">
//             <h1 className="text-xl lg:text-[29px] text-black">
//               Contact Support – Chat Live
//             </h1>
//           </div>

//           {/* Paragraph */}
//           <p className="text-base lg:text-[20px] text-black leading-relaxed mb-2">
//             In this support hub, you'll find quick access to live assistance for common computer and printer issues.
//           </p>
//           <p className="text-base lg:text-[20px] text-black leading-relaxed">
//             Click the tabs to switch between <span className="font-bold">Computer</span> and <span className="font-bold">Printer</span> topics,
//             <br className="hidden lg:block"/>
//             Then start a live chat with a support agent.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };




"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Troubleshoot() {
  const [jivoReady, setJivoReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/kd9uAKn19v";
    script.async = true;

    script.onload = () => {
      const waitForJivo = setInterval(() => {
        if (typeof window !== "undefined" && window.jivo_api) {
          setJivoReady(true);
          clearInterval(waitForJivo);
        }
      }, 500);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script and prevent memory leaks
      document.body.removeChild(script);
    };
  }, []);

  const handleSetupClick = () => {
    if (typeof window !== "undefined" && jivoReady && window.jivo_api) {
      window.jivo_api.open();
    } else {
      alert("Chat is still loading. Please wait a moment...");
    }
  };

  return (
    <div className="bg-white min-h-[430px] flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full">
        {/* Left: Devices */}
        <div className="flex flex-col items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/newsetup.png"
            alt="Printer"
            width={539}
            height={347}
            className="object-contain w-full max-w-[300px] lg:max-w-none"
          />
          <button 
            className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200 w-full sm:w-auto"
            onClick={handleSetupClick}
            disabled={!jivoReady}
          >
            Click Here For Chat Support
          </button>
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-3xl lg:text-[40px] text-black mb-2">Diagnose and solve</p>
          <div className="flex items-start justify-center lg:justify-start mb-4">
            <h1 className="text-xl lg:text-[29px] text-black">
              Contact Support – Chat Live
            </h1>
          </div>

          <p className="text-base lg:text-[20px] text-black leading-relaxed mb-2">
            In this support hub, you'll find quick access to live assistance for common computer and printer issues.
          </p>
          <p className="text-base lg:text-[20px] text-black leading-relaxed">
            Click the tabs to switch between <span className="font-bold">Computer</span> and <span className="font-bold">Printer</span> topics,
            <br className="hidden lg:block"/>
            Then start a live chat with a support agent.
          </p>
        </div>
      </div>
    </div>
  );
}
