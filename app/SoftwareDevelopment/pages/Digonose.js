export default function Diagnose() {
    const cards = [
      {
        image: '/image1.svg',
        title: 'Windows operating system issues',
      },
      {
        image: '/image2.svg',
        title: 'Battery and adapter issues',
      },
      {
        image: '/image3.svg',
        title: 'Computer is slow',
        link: true,
      },
      {
        image: '/image4.svg',
        title: 'Wireless, wired, Bluetooth networking issues',
      },
      {
        image: '/image5.svg',
        title: 'Keyboard, mouse, touchpad, and clickpad issues',
      },
      {
        image: '/image6.svg',
        title: 'Perform an HP System Recovery',
      },
      {
        image: '/image7.svg',
        title: 'Wireless, wired, Bluetooth networking issues',
      },
      {
        image: '/image8.svg',
        title: 'Keyboard, mouse, touchpad, and clickpad issues',
      },
      {
        image: '/desktop.svg',
        title: 'Perform an HP System Recovery',
      },{
        image: '/image10.svg',
        title: 'Wireless, wired, Bluetooth networking issues',
      },
      {
        image: '/image11.svg',
        title: 'Keyboard, mouse, touchpad, and clickpad issues',
      },
      
    ];
  
    return (
      <div className="bg-gradient-to-b from-sky-200 to-white min-h-screen py-16 px-4">
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
            style={{ maxWidth: 'calc(282px * 3 + 60px)', margin: '0 auto' }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
                style={{ height: '180px', width: '282px' }}
              >
                <img src={card.image} alt="icon" className="w-[60px] h-16" />
                {card.link ? (
                  <a
                    href="#"
                    className="mt-6 text-[#165DBA] text-[16px] font-[16px] hover:underline decoration-2 underline-offset-4"
                  >
                    {card.title}
                  </a>
                ) : (
                  <p className="mt-6 text-[#165DBA] text-[16px] font-medium hover:underline decoration-2 underline-offset-4">
                    {card.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Search section */}
        <div className="text-center mt-20 mb-20">
          <h2 className="text-2xl font-semibold text-black">Search our support articles</h2>
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-[600px] px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-gray-300 px-4 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  