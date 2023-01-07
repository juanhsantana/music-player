import "./App.css";
import { MusicPlayer } from "./pages/Home/MusicPlayer";

import { Song } from "./pages/Home/MusicPlayer";

function App() {
  const songs: Song[] = [
    {
      title: "Vida Louca",
      artist: "MC Poze do Rodo",
      url: "/musicas/vida-louca-mcpoze.mp3",
      duration: 182,
      cover: "/images/vida-louca.jpg",
    },
    {
      title: "Acorda Pedrinho",
      artist: "Jovem Dionísio",
      url: "/musicas/acorda-pedrinho.mp3",
      duration: 173,
      cover: "/images/acorda-pedrinho.jpg",
    },
    {
      title: "Calm Down",
      artist: "Rema, Selena Gomez",
      url: "/musicas/calm-down.mp3",
      duration: 239,
      cover: "/images/calm-down.jpg",
    },
  ];
  return (
    <>
      <MusicPlayer songs={songs} />
    </>
  );
}

export default App;
