export default function Printerissue() {
    const cards = [
      {
        image: '/printer1.svg',
        title: 'Printer setup issues',
      },
      {
        image: '/printer2.svg',
        title: 'Printer offline',
      },
      {
        image: '/printer3.svg',
        title: 'Wireless printer issues'
      
      },
      {
        image: '/printer4.svg',
        title: 'Scanner issues',
      },
      {
        image: '/printer5.svg',
        title: 'Color or black ink not printing',
      },
      {
        image: '/printer6.svg',
        title: 'Cartridge issues',
      },
      {
        image: '/printer7.svg',
        title: 'Print job stuck in queue',
      },
      {
        image: '/printer8.svg',
        title: 'Paper jam issues',
      },
      {
        image: '/printer9.svg',
        title: 'HP Instant Ink issues',
      },{
        image: '/printer10.svg',
        title: 'Carriage is jammed',
      },
      {
        image: '/printer11.svg',
        title: 'Fax issues',
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
  