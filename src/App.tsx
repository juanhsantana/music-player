import "./App.css";
import { MusicPlayer } from "./pages/Home/MusicPlayer";

import { Song } from "./pages/Home/MusicPlayer";

function App() {
  const songs: Song[] = [
    {
      title: "Vida Louca",
      artist: "MC Poze do Rodo",
      url: "../../../public/Musics/vida-louca-mcpoze.mp3",
      duration: 182,
      cover: "../public/images/vida-louca.jpg",
    },
    {
      title: "Acorda Pedrinho",
      artist: "Jovem Dionísio",
      url: "../../../public/Musics/acorda-pedrinho.mp3",
      duration: 173,
      cover: "../public/images/acorda-pedrinho.jpg",
    },
    {
      title: "Calm Down",
      artist: "Rema, Selena Gomez",
      url: "../../../public/Musics/calm-down.mp3",
      duration: 239,
      cover: "../public/images/calm-down.jpg",
    },
  ];
  return (
    <>
      <MusicPlayer songs={songs} />
    </>
  );
}

export default App;
