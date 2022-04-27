import React from "react";
import TextInput from "./TextInput";

const FormInput = ({ city, setCity, onSubmit }) => {
  return (
    <form autoComplete="false" onSubmit={onSubmit}>
      <TextInput onChange={(e) => setCity(e.target.value)} value={city} />
      <button className="transition text-white bg-black rounded-md py-2 px-3 text-md hover:bg-[#034363]">
        Check Now
      </button>
    </form>
  );
};

export default FormInput;
