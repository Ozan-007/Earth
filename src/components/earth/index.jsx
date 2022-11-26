import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import Clouds from "../../assets/8k_earth_clouds.jpg";
import Day from "../../assets/8k_earth_daymap.jpg";
import Night from "../../assets/8k_earth_nightmap.jpg";
import Normal from "../../assets/preview_earth_normal_map.jpg";
import Specular from "../../assets/preview_earth_specular_map.jpg";
import "../../App.css";

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [Day, Normal, Specular, Clouds]
  );

  // const earthRef = useRef();
  // const cloudRef = useRef();

  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   cloudRef.current.rotation.y = elapsedTime / 6;
  //   earthRef.current.rotation.y = elapsedTime / 6;
  // });

  return (
    <>
      <ambientLight intensity={1} />
      <Stars radius={300} depth={80} count={2000} factor={6} saturation={0} />
      <pointLight color="#f5f3ea" position={[8, 3, -1]} intensity={1.5} />
      <mesh>
        <sphereGeometry args={[1.00000000000005, 360, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 360, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.3}
          roughness={0.6}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.68}
          rotateSpeed={0.45}
        />
      </mesh>
    </>
  );
};

export default Earth;
