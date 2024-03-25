import { createContext } from "react";
import { MainContextType } from "./mainContextType";

export default createContext<MainContextType>({
  isMuted: false,
  setIsMuted: () => {},

  isVisible: true,
  setIsVisible: () => {},

  audio: new Audio(),
  setAudio: () => {},

  isPlaying: false,
  setIsPlaying: () => {},

  isLoading: false,
  setIsLoading: () => {},
});
