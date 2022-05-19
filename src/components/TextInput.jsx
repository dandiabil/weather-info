import React from "react";

const TextInput = ({ onChange, value, className }) => {
  return (
    <div className={`block my-5 ${className}`}>
      <input
        type="text"
        placeholder="City Name"
        className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${className}`}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default TextInput;
