import type { Languages } from "./DataContext";

import { useEffect, FC, useState } from "react";

import { portfolioEN, portfolioES } from "../data";
import { DataContext } from "./DataContext";

interface Props {
  children: React.ReactNode;
}

export const DataProvider: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<Languages>("es");

  useEffect(() => {
    const lang = localStorage.getItem("language") as Languages;
    if (lang) setLanguage(lang);
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <DataContext.Provider
      value={{
        language,
        portfolio: language === "es" ? portfolioES : portfolioEN,
        toggleLanguage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
