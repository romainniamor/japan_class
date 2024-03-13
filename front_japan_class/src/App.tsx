import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ImageBackground from "./components/ImageBackground";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    // <Canvas>
    //   <ambientLight />
    //   <OrbitControls />
    //   <ImageBackground />
    // </Canvas>
    <LoginPage />
  );
}

export default App;
