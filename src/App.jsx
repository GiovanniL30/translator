import React from "react";
import { useState } from "react";
import SearchLanguage from "./components/SearchLanguage";
import LanguageBox from "./components/LanguageBox";

const App = () => {
  const [languages, setLanguages] = useState({ from: "en", to: "en" });
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  async function translate() {
    const url = "https://google-api31.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_URL,
        "x-rapidapi-host": "google-api31.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: {
        text: input,
        to: languages.to,
        from_lang: languages.from,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

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
      <div className="flex w-full gap-5 mt-5">
        <textarea
          className="w-full border-[1px] p-5 focus:outline-blue-400"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></textarea>
        <LanguageBox text={translated} />
      </div>
      <button
        onClick={translate}
        className="w-full bg-blue-400 text-white mt-20 py-2 rounded-md hover:opacity-50 duration-500 ease-in"
      >
        Translate
      </button>
    </div>
  );
};

export default App;
