import React from "react";
import { useState } from "react";
import SearchLanguage from "./components/SearchLanguage";
import LanguageBox from "./components/LanguageBox";

const App = () => {
  const [languages, setLanguages] = useState({ from: "en", to: "en" });
  const [translated, setTranslated] = useState("");

  async function translate() {
    const url = "https://google-api31.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": "google-api31.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: {
        text: "William Edward Sanders (1883–1917) was a New Zealand recipient of the Victoria Cross (VC), the highest British and Commonwealth combat award for gallantry. He took up a seafaring career in 1899 and earned a master's certificate in 1914, after the outbreak of World War I. He served on troopships until April 1916, when he was commissioned in the Royal Naval Reserve. He was appointed second in command of Helgoland, a Q-ship operating against German submarines. He was given his own command, HMS Prize, in February 1917. Sanders was awarded the VC for his actions while on his first patrol as captain, when Prize engaged and drove off a German U-boat that had attacked and damaged the ship. He was killed in action when Prize was sunk by a U-boat on her fourth patrol. His VC is currently held by the Auckland War Memorial Museum. His memorials include the Sanders Cup, a sailing trophy for 14-foot (4.3 m) yachts.",
        to: "fr",
        from_lang: "",
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
          name=""
          id=""
        ></textarea>
        <LanguageBox text={translated} />
      </div>
      <button className="w-full bg-blue-400 text-white mt-20 py-2 rounded-md hover:opacity-50 duration-500 ease-in">
        Translate
      </button>
    </div>
  );
};

export default App;
