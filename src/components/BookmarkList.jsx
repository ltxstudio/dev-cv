import { useAppContext } from "../context/AppContext";

function BookmarkList() {
  const { bookmarks, setSelectedSurah } = useAppContext();

  if (!bookmarks.length) return null;

  return (
    <div className="my-6 p-4 bg-teal-50 rounded shadow">
      <h3 className="text-xl font-bold">Bookmarks</h3>
      {bookmarks.map((bookmark, index) => (
        <div key={index} className="border-b py-2">
          <p className="text-gray-800">
            <strong>Surah {bookmark.surah_name}:</strong> {bookmark.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BookmarkList;
