import { useAppContext } from "../context/AppContext";

function Navbar() {
  const { setDarkMode, darkMode } = useAppContext();

  return (
    <nav className="flex justify-between items-center bg-teal-600 p-4">
      <h1 className="text-2xl font-bold">Al-Quran App</h1>
      <button
        className="text-white bg-teal-800 px-4 py-2 rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
