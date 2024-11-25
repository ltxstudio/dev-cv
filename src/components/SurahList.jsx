import { useAppContext } from "../context/AppContext";

function SurahList() {
  const { surahs, setSelectedSurah } = useAppContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {surahs.map((surah) => (
        <div
          key={surah.id}
          className="p-4 bg-white rounded shadow cursor-pointer hover:bg-teal-100"
          onClick={() => setSelectedSurah(surah)}
        >
          <h3 className="text-xl font-bold">{surah.name_simple}</h3>
          <p>{surah.name_arabic}</p>
        </div>
      ))}
    </div>
  );
}

export default SurahList;
