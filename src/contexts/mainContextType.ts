import { Dispatch, SetStateAction } from "react";

export type MainContextType = {
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;

  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;

  audio: HTMLAudioElement | undefined;
  setAudio: Dispatch<SetStateAction<HTMLAudioElement | undefined>>;

  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
