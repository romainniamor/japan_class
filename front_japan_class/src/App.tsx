import "./App.css";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import ImageBackground from "./components/ImageBackground";
import LoginPage from "./pages/loginPage/LoginPage";
import ClassPage from "./pages/classPage/ClassPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/class/:user" element={<ClassPage />} />
    </Routes>
    // <Canvas>
    //   <ambientLight />
    //   <OrbitControls />
    //   <ImageBackground />
    // </Canvas>
  );
}

export default App;
