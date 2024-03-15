import "./App.css";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import ImageBackground from "./components/ImageBackground";
import LoginPage from "./pages/loginPage/LoginPage";
import ClassPage from "./pages/classPage/ClassPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/class/:user" element={<ClassPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>

    // <Canvas>
    //   <ambientLight />
    //   <OrbitControls />
    //   <ImageBackground />
    // </Canvas>
  );
}

export default App;
