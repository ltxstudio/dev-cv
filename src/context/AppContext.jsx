import { createContext, useState, useContext } from "react";

// Create a context for the app state
const AppContext = createContext();

// Provider component that will wrap the entire app
export const AppProvider = ({ children }) => {
  // State variables to manage surahs, selected surah, translation language, bookmarks, and dark mode
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [translationLang, setTranslationLang] = useState("en"); // Default translation: English
  const [bookmarks, setBookmarks] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Default mode: light

  // Function to toggle bookmark state for a verse
  const toggleBookmark = (verse) => {
    // Check if the verse is already bookmarked
    if (bookmarks.some((b) => b.id === verse.id)) {
      // Remove from bookmarks if already bookmarked
      setBookmarks(bookmarks.filter((b) => b.id !== verse.id));
    } else {
      // Add to bookmarks if not bookmarked
      setBookmarks([...bookmarks, verse]);
    }
  };

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <AppContext.Provider
      value={{
        surahs, // List of Surahs
        setSurahs, // Set Surahs
        selectedSurah, // Selected Surah
        setSelectedSurah, // Set selected Surah
        translationLang, // Selected translation language
        setTranslationLang, // Set translation language
        bookmarks, // Bookmarked verses
        toggleBookmark, // Function to toggle bookmark
        darkMode, // Dark mode state
        toggleDarkMode, // Toggle dark mode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to easily use app context values in components
export const useAppContext = () => useContext(AppContext);
