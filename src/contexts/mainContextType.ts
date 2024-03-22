import { Dispatch, SetStateAction } from "react";

export type MainContextType = {
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;

  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;

  audio: HTMLAudioElement;
  setAudio: Dispatch<SetStateAction<HTMLAudioElement>>;
};
