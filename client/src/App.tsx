import { useState } from "react";
import MoodPicker from "./components/MoodPicker.jsx";
import './App.css'

export default function App() {
  const [mood, setMood] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">VibeWave: Mood Music Generator</h1>

      <MoodPicker onSelectMood={(m) => setMood(m)} />

      {mood && (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg text-gray-900 max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">You selected:</h2>
          <p className="text-xl">{mood}</p>
          <p className="mt-2 text-sm text-gray-600">
            Next step: generate playlist or AI music for this mood!
          </p>
        </div>
      )}
    </div>
  );
}
