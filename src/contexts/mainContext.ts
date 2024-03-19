import { createContext } from "react";
import { MainContextType } from "./mainContextType";

export default createContext<MainContextType>({
  isVisible: false,
  setIsVisible: () => {},
});
