import React from "react";
import { useState } from "react";
import SearchLanguage from "./components/SearchLanguage";

const App = () => {
  const [languages, setLanguages] = useState({ from: "en", to: "en" });

  console.log(languages);

  return (
    <div className="w-full max-w-[1440px] mx-auto p-5">
      <div className="flex w-full gap-5">
        <SearchLanguage
          setLanguage={setLanguages}
          dest={"from"}
          title="Translate From"
        />
        <SearchLanguage
          setLanguage={setLanguages}
          dest={"to"}
          title="Translate To"
        />
      </div>
    </div>
  );
};

export default App;
