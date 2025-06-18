import { useState } from "react";

const moods = [
  { id: "happy", label: "😊 Happy", color: "bg-yellow-300" },
  { id: "sad", label: "😢 Sad", color: "bg-blue-500" },
  { id: "chill", label: "😎 Chill", color: "bg-green-400" },
  { id: "energetic", label: "⚡ Energetic", color: "bg-red-400" },
];

export default function MoodPicker({ onSelectMood }) {
  const [selectedMood, setSelectedMood] = useState(null);

  function handleSelect(mood) {
    setSelectedMood(mood.id);
    onSelectMood(mood.id);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
      <h2 className="text-xl font-semibold mb-4 text-center">Select your mood</h2>
      <div className="flex justify-around gap-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleSelect(mood)}
            className={`flex flex-col items-center justify-center px-4 py-3 rounded-lg text-lg font-medium transition 
              ${
                selectedMood === mood.id 
                  ? `${mood.color} text-white shadow-lg scale-110` 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
