// components/Header.js
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

function Header() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="py-4 px-4 tablet:py-16 tablet:px-16 flex items-center gap-4 justify-between">
      {/* Logo */}
      <div className=" cursor-pointer font-extrabold tracking-tight leading-none text-3xl  md:text-5xl lg:text-6xl ">
        <span className="text-accent-500">freeresources</span>
        <span className="text-gray-900 dark:text-neutral-light">.tech</span>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-3">
        <button
          onClick={handleToggle}
          className="p-2 rounded-full bg-neutral-800 dark:bg-neutral-light text-white hover:bg-gray-600"
        >
          {theme === "light" ? (
            <BsMoonStarsFill className="text-yellow-600 text-xl" />
          ) : (
            <FaSun className="text-yellow-600 text-xl" />
          )}
        </button>

        {/* GitHub Icon */}
        <a
          href="https://github.com/masiedu4/Free-Learning-Resources"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaGithub size={33} />
        </a>
      </div>
    </header>
  );
}

export default Header;
