import { OrbitControls, useGLTF } from "@react-three/drei";
import useColor from "./store/useColor";
import * as THREE from "three";
import { useControls } from "leva";
import { useEffect } from "react";

export default function Experience() {
  const { scene } = useGLTF("/models/shoe-draco.glb");

  const color = useColor((state) => state.color);

    const colorLaces = useColor((state) => state.colorLaces);

    const colorStripes = useColor((state) => state.colorStripes);

  const colorSole = useColor((state) => state.colorSole);
  
  const nightView = useColor((state) => state.nightView);

  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name === "shoe_1") {
        if (Array.isArray(child.material)) {
          child.material.map((material) => {
            const cloneMaterial = material.clone();
            cloneMaterial.color = new THREE.Color(color);
            material.copy(cloneMaterial);
          });
        }
        else {
          child.material.color = new THREE.Color(color);
        }
      }
      if (child.name === "shoe") { //laces
        if (Array.isArray(child.material)) {
          child.material.map((material) => {
            const cloneMaterial = material.clone();
            cloneMaterial.color = new THREE.Color(colorLaces);
            material.copy(cloneMaterial);
          });
        }
        else {
          child.material.color = new THREE.Color(colorLaces);
        }
      }
      if (child.name === "shoe_5") { //stripes
        if (Array.isArray(child.material)) {
          child.material.map((material) => {
            const cloneMaterial = material.clone();
            cloneMaterial.color = new THREE.Color(colorStripes);
            material.copy(cloneMaterial);
          });
        }
        else {
          child.material.color = new THREE.Color(colorStripes);
        }
      }
      if (child.name === "shoe_4") { //sole
        if (Array.isArray(child.material)) {
          child.material.map((material) => {
            const cloneMaterial = material.clone();
            cloneMaterial.color = new THREE.Color(colorSole);
            material.copy(cloneMaterial);
          });
        }
        else {
          child.material.color = new THREE.Color(colorSole);
        }
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useEffect(() => {
    if (nightView) {
      document.getElementById("root").style.background = "#202020";
    } else {
      document.getElementById("root").style.background = "#f9f9f9";
    }
  }, [nightView]);

  return (
    <>
      <OrbitControls makeDefault />
          <ambientLight intensity={2} />
          {nightView && <spotLight castShadow intensity={50} position={[0.89, 2.25, 1.86]} />}
          <primitive castShadow scale={1.25} position-x={1} object={scene} />
    </>
  );
}
