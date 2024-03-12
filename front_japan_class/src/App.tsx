import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ImageBackground from "./components/ImageBackground";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <ImageBackground />
    </Canvas>
  );
}

export default App;
