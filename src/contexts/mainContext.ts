import { createContext } from "react";
import { MainContextType } from "./mainContextType";

export default createContext<MainContextType>({
  isMuted: false,
  setIsMuted: () => {},

  isVisible: false,
  setIsVisible: () => {},

  audio: new Audio(),
  setAudio: () => {},

  userToken: 0,
  setUserToken: () => {},
});
