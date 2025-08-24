import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Configurator from "./Configurator.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
        <Configurator />
        <div className="absolute bottom-0 left-0">
            <p className="text-sm text-gray-600 my-2 p-2">Made with ♡ by Haseeb.</p>
        </div>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Experience />
    </Canvas>
  </>
);
