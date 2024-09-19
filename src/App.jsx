import React from "react";
import { useState } from "react";
import SearchLanguage from "./components/SearchLanguage";

const App = () => {
  const [languages, setLanguages] = useState({ from: "en", to: "en" });

  return (
    <div className="w-full max-w-[1440px] mx-auto p-5">
      <SearchLanguage />
    </div>
  );
};

export default App;
