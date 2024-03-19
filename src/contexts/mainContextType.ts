import { Dispatch, SetStateAction } from "react";

export type MainContextType = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};
