import React from "react";

function LanguageSelector({ setLanguage }) {
  const languages = [
    { label: "English", value: "en" },
    { label: "Urdu", value: "ur" },
    { label: "Malay", value: "ms" },
    { label: "French", value: "fr" },
  ];

  return (
    <div className="language-selector">
      <label htmlFor="language">Select Translation:</label>
      <select
        id="language"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
