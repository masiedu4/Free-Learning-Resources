import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer class=" shadow  m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <Link
          target="_blank"
          href={"https://github.com/masiedu4/Free-Learning-Resources"}
          class="sm:flex sm:items-center sm:justify-between"
        >
          <span class="flex items-center gap-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Add a Resource
            <FaGithub size={33} />
          </span>
        </Link>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="flex justify-center gap-2 text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://twitter.com/MichaelAsiedu_" class="hover:underline">
            Maintained by Michael Asiedu
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
