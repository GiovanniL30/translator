import React, { useState } from "react";
import LangugeButton from "./LangugeButton";
import { languages } from "../constants";

const SearchLanguage = () => {
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (event) => {
    setSearchKey(event.target.value);
  };

  return (
    <div>
      <input
        className="w-full border-[1px] py-1 pl-4 rounded-sm outline-none transition-all duration-200 focus:border-blue-500"
        type="text"
        value={searchKey}
        onChange={handleInputChange}
        placeholder="Search languages"
      />

      <div className="flex flex-wrap gap-2 mt-5">
        {languages
          .filter((language) =>
            language.name.toLowerCase().includes(searchKey.toLowerCase())
          )
          .map((language) => (
            <LangugeButton key={language.code} name={language.name} />
          ))}
      </div>
    </div>
  );
};

export default SearchLanguage;
