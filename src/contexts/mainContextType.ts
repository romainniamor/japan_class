import { Dispatch, SetStateAction } from "react";

export type MainContextType = {
  isMuted: boolean;
  setUsMuted: Dispatch<SetStateAction<boolean>>;

  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;

  audio: HTMLAudioElement;
  setAudio: Dispatch<SetStateAction<HTMLAudioElement>>;
};
