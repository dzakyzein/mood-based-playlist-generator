const Footer = () => {
  return (
    <footer className='bg-[#12071f] text-gray-400 py-10 px-6 md:px-20 text-center md:text-left'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
        {/* Brand & Desc */}
        <div>
          <h3 className='text-softPurple text-xl font-bold mb-1'>MoodTunes</h3>
          <p className='text-sm'>
            AI-powered music that understands your mood.
          </p>
        </div>

        {/* Navigation */}
        <ul className='flex flex-wrap justify-center gap-4 text-sm'>
          <li>
            <a href='#how-it-works' className='hover:text-white transition'>
              How It Works
            </a>
          </li>
          <li>
            <a href='#features' className='hover:text-white transition'>
              Features
            </a>
          </li>
          <li>
            <a href='#tech-stack' className='hover:text-white transition'>
              Tech Stack
            </a>
          </li>
          <li>
            <a href='#demo' className='hover:text-white transition'>
              Demo
            </a>
          </li>
        </ul>
      </div>

      <div className='mt-8 text-xs text-gray-500 text-center'>
        © 2025 Dzaky. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
