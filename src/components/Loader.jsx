import React from "react";

const Loader = () => {
  return (
    <div className="relative top-24 z-30 md:top-32 lg:top-40">
      <p className="text-center font-semibold text-black animate-pulse sm:text-2xl">
        Getting the data..
      </p>
    </div>
  );
};

export default Loader;
