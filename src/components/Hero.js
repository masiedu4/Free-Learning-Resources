// components/HeroCopy.js
import React from "react";

function Hero() {
  return (
    <section class=" ">
      <div class="space-y-6 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="https://github.com/masiedu4/Free-Learning-Resources"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-neutral-900 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-brand-500 rounded-full text-neutral-light px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span class="text-sm font-medium">
            Free & Open-Source. Contribute here
          </span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 laptop:text-5xl desktop:text-6xl dark:text-neutral-light">
          Free Learning Resources for Everyone in Tech
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-800 desktop:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          An Open Source Community of All-Inclusive Free Resources. Empowering
          learners to chase their dreams.
        </p>
      </div>
    </section>
  );
}

export default Hero;
