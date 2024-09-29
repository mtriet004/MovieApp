import React, { useContext } from "react";
import { movieContext } from "../context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(movieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl uppercase mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  className="w-full h-full object-cover"
                  alt={item.title}
                ></img>
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
