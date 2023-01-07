import React, { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";
import "./MusicPlayer.module.css";

import { FaPause } from "react-icons/fa";

import PlayBack from "../../assets/Icons/play-back.svg";
import Play from "../../assets/Icons/play.svg";
import PlayForward from "../../assets/Icons/play-forward.svg";

export interface Song {
  title: string;
  artist: string;
  url: string;
  duration: number;
  cover: string;
}

export const MusicPlayer: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (audioElement.current) {
      if (isPlaying) {
        audioElement.current.pause();
      } else {
        audioElement.current.play();
      }
    }
  };

  const handleError = () => {
    console.error("Erro ao reproduzir música");
  };

  const nextSong = () => {
    if (!currentSong || !songs.length) {
      return;
    }

    const currentIndex = songs.indexOf(currentSong);
    if (currentIndex === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[currentIndex + 1]);
    }
  };

  const previousSong = () => {
    if (!currentSong || !songs.length || currentSong === songs[0]) {
      return;
    }

    const currentIndex = songs.indexOf(currentSong);
    setCurrentSong(songs[currentIndex - 1]);
  };

  const handleTimeUpdate = () => {
    if (audioElement.current) {
      setCurrentTime(audioElement.current.currentTime);
    }
  };

  const handleSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioElement.current) {
      audioElement.current.currentTime = Number(event.target.value);
      setCurrentTime(Number(event.target.value));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.playerMusic}>
        <div className={styles.imgContainer}>
          {currentSong && (
            <img
              src={currentSong.cover}
              alt={`Cover for ${currentSong.title}`}
            />
          )}
        </div>
        <div className={styles.heading}>
          {currentSong ? (
            <>
              <p className={styles.title}>{currentSong.title}</p>
              <p className={styles.artist}>{currentSong.artist}</p>
              <audio
                ref={audioElement}
                onError={handleError}
                autoPlay
                src={currentSong ? currentSong.url : ""}
                onTimeUpdate={handleTimeUpdate}
              />
            </>
          ) : (
            <p className={styles.notFoundMusic}>Nenhuma música selecionada</p>
          )}
        </div>
        <div className={styles.buttonControls}>
          <button className={styles.button} onClick={previousSong}>
            <img src={PlayBack} alt="PlayBack" />
          </button>
          <button className={styles.button} onClick={togglePlay}>
            {isPlaying ? (
              <FaPause size={27} color="var(--colors-whitesmoke)" />
            ) : (
              <img src={Play} alt="Play" />
            )}
          </button>
          <button className={styles.button} onClick={nextSong}>
            <img src={PlayForward} alt="PlayForward" />
          </button>
        </div>
        <input
          className={styles.range}
          type="range"
          min={0}
          max={currentSong ? currentSong.duration : 0}
          value={currentTime}
          onChange={handleSeekChange}
          onMouseUp={togglePlay}
        />
        {/* <ul className={styles.musicList}>
          {songs.map((song) => (
            <li className={styles.playlist} key={song.title} onClick={() => playSong(song)}>
              {song.title}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
