import { motion } from "framer-motion";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Demo", href: "#demo" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed w-full z-50 bg-[#1a092e]/90 backdrop-blur-sm text-white px-6 py-4 shadow-md flex justify-between items-center'
    >
      <h1 className='text-2xl font-bold text-softPurple'>MoodTunes</h1>
      <ul className='flex space-x-6 text-sm font-medium'>
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className='cursor-pointer hover:text-accentPurple transition duration-300'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
