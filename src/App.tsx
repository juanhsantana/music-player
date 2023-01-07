import "./App.css";
import { MusicPlayer } from "./pages/Home/MusicPlayer";

import { Song } from "./pages/Home/MusicPlayer";

function App() {
  const songs: Song[] = [
    {
      title: "Vida Louca",
      artist: "MC Poze do Rodo",
      url: "../src/assets/musicas/vida-louca-mcpoze.mp3",
      duration: 182,
      cover: "../src/assets/images/vida-louca.jpg",
    },
    {
      title: "Acorda Pedrinho",
      artist: "Jovem Dionísio",
      url: "../src/assets/musicas/acorda-pedrinho.mp3",
      duration: 173,
      cover: "../src/assets/images/acorda-pedrinho.jpg",
    },
    {
      title: "Calm Down",
      artist: "Rema, Selena Gomez",
      url: "../src/assets/musicas/calm-down.mp3",
      duration: 239,
      cover: "../src/assets/images/calm-down.jpg",
    },
  ];
  return (
    <>
      <MusicPlayer songs={songs} />
    </>
  );
}

export default App;
