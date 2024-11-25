import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import AudioPlayer from "./AudioPlayer";
import axios from "axios";

function SurahDetails() {
  const { selectedSurah, setSelectedSurah, translationLang, toggleBookmark } = useAppContext();
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    if (selectedSurah) {
      axios
        .get(`https://api.quran.com/api/v4/quran/verses/${translationLang}?chapter_number=${selectedSurah.id}`)
        .then((response) => setVerses(response.data.verses));
    }
  }, [selectedSurah, translationLang]);

  if (!selectedSurah) return null;

  return (
    <div>
      <button className="mb-4 text-teal-600" onClick={() => setSelectedSurah(null)}>
        Back
      </button>
      <h2 className="text-2xl font-bold">{selectedSurah.name_simple}</h2>
      <div>
        {verses.map((verse) => (
          <div key={verse.id} className="p-4 border-b">
            <p className="text-xl">{verse.text_uthmani}</p>
            <p className="text-sm text-gray-600">{verse.translations[0]?.text}</p>
            <button
              className="text-teal-500 mt-2"
              onClick={() => toggleBookmark(verse)}
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
      <AudioPlayer audioUrl={`https://verses.quran.com/${selectedSurah.id}.mp3`} />
    </div>
  );
}

export default SurahDetails;
