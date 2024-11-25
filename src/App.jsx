import { useEffect } from "react";
import { useAppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import SurahList from "./components/SurahList";
import SurahDetails from "./components/SurahDetails";
import BookmarkList from "./components/BookmarkList";
import axios from "axios";

function App() {
  const { surahs, setSurahs, selectedSurah, darkMode } = useAppContext();

  useEffect(() => {
    axios.get("https://api.quran.com/api/v4/chapters").then((response) => {
      setSurahs(response.data.chapters);
    });
  }, [setSurahs]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : ""}>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        {selectedSurah ? <SurahDetails /> : <SurahList />}
        <BookmarkList />
      </div>
    </div>
  );
}

export default App;
