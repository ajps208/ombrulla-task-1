import React, { useEffect, useState } from "react";

function Status() {
  const [blogs, setBlogs] = useState([]);
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://ombrulla-client-cms.vercel.app/api/paperkraft"
      );
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
        handleSearch(data);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleSearch = (data) => {
    const filteredList = data.filter((product) =>
      product.status==="published"
    );
    setFilterBlogs(filteredList);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-center justify-center">
            <h1 className="text-3xl font-extrabold text-center">Published....</h1>
    
            <form className="ms-5">
              <input
                className="h-8 w-72 rounded-lg border-2 ps-2"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search your favourite blog here....."
              />
              <button
                type="button"
                onClick={() => handleSearch(blogs)}
                className="ms-1 border-2 h-8 w-20 text-white bg-blue-600 rounded-lg"
              >
                Search
              </button>
            </form>
        </div>
        <div className="w-full mt-10 flex flex-row px-20 ">
          <div className="w-full grid grid-cols-3 gap-4">
            {filterBlogs.length > 0 ? (
              filterBlogs.map((item, index) => (
                <div class="mt-8 px-12 border-2 py-5" key={index}>
                  <img
                    width={"400px"}
                    class="rounded-sm"
                    src={item.image}
                    alt=""
                  />
                  <p class="text-base md:text-xl font-bold text-gray-900">
                    {item.title}
                  </p>
                  <p class="text-xs">{item.description}</p>
                </div>
              ))
            ) : (
              <p>No data....</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
