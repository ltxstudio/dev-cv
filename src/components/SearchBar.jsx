import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function SearchBar() {
  const { surahs, setSelectedSurah } = useAppContext();
  const [query, setQuery] = useState("");

  const filteredSurahs = surahs.filter((surah) =>
    surah.name_simple.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search Surah..."
        className="w-full p-2 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <div className="bg-white border mt-2 rounded shadow">
          {filteredSurahs.map((surah) => (
            <div
              key={surah.id}
              className="p-2 cursor-pointer hover:bg-teal-100"
              onClick={() => setSelectedSurah(surah)}
            >
              {surah.name_simple}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
