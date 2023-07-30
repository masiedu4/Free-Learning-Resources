// pages/resources.js
import { useState, useEffect } from "react";
import { resources } from "../../resources";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import Link from "next/link";

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(8);

  const handleTabClick = (categoryId) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryId ? prevCategory : categoryId
    );
    setSearchQuery("");
    setDisplayCount(8);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSelectedCategory((prevCategory) => {
      return event.target.value === ""
        ? "all" // Reset to "all" when the search query is cleared
        : prevCategory;
    });
    setDisplayCount(8);
  };

  const handleLoadMore = () => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + 5);
  };

  const filteredResources = () => {
    if (searchQuery === "") {
      if (selectedCategory === "all") {
        return resources.categories.flatMap((category) => category.resources);
      } else {
        const selectedCategoryResources =
          resources.categories.find(
            (category) => category.id === selectedCategory
          )?.resources || [];
        return selectedCategoryResources;
      }
    } else {
      return resources.categories.reduce((acc, category) => {
        return acc.concat(
          category.resources.filter(
            (resource) =>
              (selectedCategory === "all" ||
                resource.category === selectedCategory) &&
              (resource.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
                resource.tags.some((tag) =>
                  tag.toLowerCase().includes(searchQuery.toLowerCase())
                ))
          )
        );
      }, []);
    }
  };

  // Recompute the filtered resources whenever selectedCategory or searchQuery changes
  const resourcesToDisplay = filteredResources().slice(0, displayCount);
  useEffect(() => {
    setDisplayCount(8);
    filteredResources();
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex justify-center items-center flex-col px-4">
      {/* Center vertically and horizontally */}
      <form className="tablet:w-1/4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-neutral-900 sr-only dark:text-neutral-light"
        >
          Search
        </label>
        <div class="mb-6 relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch />
          </div>
          <input
            type="search"
            id="default-search"
            value={searchQuery}
            class="block w-full p-3 pl-10 text-sm text-neutral-900 border-none rounded-lg bg-gray-100 dark:bg-neutral-700  dark:placeholder-neutral-light dark:text-neutral-light "
            placeholder="Search JavaScript, ML, AI..."
            onChange={handleSearch}
          />
        </div>
      </form>
      {/* Tabs */}
      <div className="flex mb-8 px-4">
        <button
          key="all"
          onClick={() => handleTabClick("all")}
          className={`py-1 px-2 mr-4 rounded ${
            selectedCategory === "all"
              ? "bg-gray-800 text-neutral-light"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          All Resources
        </button>
        {resources.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleTabClick(category.id)}
            className={`py-1 px-2 mr-4 rounded ${
              selectedCategory === category.id
                ? "bg-gray-800 text-neutral-light"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Display Resources */}
      <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5">
        {resourcesToDisplay.map((resource) => (
          <div
            key={resource}
            class="max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {resource.title}
            </h5>

            <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400 items-center">
              <AiFillTags className="mr-1 text-accent-600" />{" "}
              {resource.tags.join(", ")}
            </p>
            <Link href={resource.link}>
              <p class="flex gap-1  items-center px-3 py-2 text-sm font-medium text-center dark:text-neutral-light text-neutral-900 ">
                Learn more
                <BsArrowRight />
              </p>
            </Link>
          </div>
        ))}
      </div>
      {resourcesToDisplay.length < filteredResources().length && (
        <button
          className="my-4 py-2 px-4 bg-gray-800 text-white rounded-md shadow-md transition duration-300 "
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Resources;
