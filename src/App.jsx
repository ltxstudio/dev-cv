import { useEffect } from "react";
import { useAppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import SurahList from "./components/SurahList";
import SurahDetails from "./components/SurahDetails";
import SearchBar from "./components/SearchBar";
import BookmarkList from "./components/BookmarkList";
import LanguageSelector from "./components/LanguageSelector";
import axios from "axios";

function App() {
  const {
    surahs,
    setSurahs,
    selectedSurah,
    bookmarks,
    darkMode,
    setTranslationLang,
  } = useAppContext();

  useEffect(() => {
    // Fetch list of Surahs from the API
    axios.get("https://api.quran.com/api/v4/chapters").then((response) => {
      setSurahs(response.data.chapters);
    });
  }, [setSurahs]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "min-h-screen"}>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        {/* Language Selector */}
        <LanguageSelector />

        {/* Search Bar */}
        <SearchBar />

        {/* Conditional Rendering */}
        {selectedSurah ? (
          // Show Surah Details if one is selected
          <SurahDetails />
        ) : (
          // Show Surah List otherwise
          <div>
            <h2 className="text-2xl font-bold mb-4">Surah List</h2>
            <SurahList />
          </div>
        )}

        {/* Bookmark List */}
        {bookmarks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Bookmarks</h2>
            <BookmarkList />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
