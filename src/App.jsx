import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/earth";
import "./App.css";

const App = () => (
  <Canvas>
    <Suspense fallback={null}>
      <Earth />
    </Suspense>
  </Canvas>
);

export default App;
