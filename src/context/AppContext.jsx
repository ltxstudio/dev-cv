import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [translationLang, setTranslationLang] = useState("en");
  const [bookmarks, setBookmarks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleBookmark = (verse) => {
    if (bookmarks.some((b) => b.id === verse.id)) {
      setBookmarks(bookmarks.filter((b) => b.id !== verse.id));
    } else {
      setBookmarks([...bookmarks, verse]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        surahs,
        setSurahs,
        selectedSurah,
        setSelectedSurah,
        translationLang,
        setTranslationLang,
        bookmarks,
        toggleBookmark,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
