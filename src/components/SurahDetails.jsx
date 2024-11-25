import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import AudioPlayer from "./AudioPlayer";
import axios from "axios";

function SurahDetails() {
  const { selectedSurah, setSelectedSurah, translationLang, toggleBookmark } = useAppContext();
  const [verses, setVerses] = useState([]);
  const [tafsir, setTafsir] = useState("");

  useEffect(() => {
    if (selectedSurah) {
      axios
        .get(`https://api.quran.com/api/v4/quran/verses/${translationLang}?chapter_number=${selectedSurah.id}`)
        .then((response) => setVerses(response.data.verses));

      axios
        .get(`https://api.quran.com/api/v4/tafsirs?chapter_number=${selectedSurah.id}`)
        .then((response) => setTafsir(response.data.tafsir || "Tafsir not available"));
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
              onClick={() => toggleBookmark({ id: verse.id, text: verse.translations[0]?.text, surah_name: selectedSurah.name_simple })}
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
      <AudioPlayer audioUrl={`https://verses.quran.com/${selectedSurah.id}.mp3`} />
      <div className="mt-4 p-4 bg-gray-100 rounded shadow">
        <h3 className="text-lg font-bold">Tafsir</h3>
        <p>{tafsir}</p>
      </div>
    </div>
  );
}

export default SurahDetails;
