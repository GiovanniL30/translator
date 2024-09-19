import React, { useState } from "react";
import { languages } from "../constants";

const SearchLanguage = ({ setLanguage, dest, title }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSelectChange = (event) => {
    const { value, selectedOptions } = event.target;
    const selectedOption = selectedOptions[0];
    const code = selectedOption.getAttribute("data-code");

    setSelectedLanguage(value);
    setLanguage((prev) => ({ ...prev, [dest]: code })); // Update the language code
  };

  return (
    <div className="w-full">
      <select
        className="w-full border-[1px] py-1 pl-4 rounded-sm outline-none transition-all duration-200 focus:border-blue-500"
        value={selectedLanguage}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          {title}
        </option>
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.name}
            data-code={language.code}
          >
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchLanguage;
