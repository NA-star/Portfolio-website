/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: the_table (https://sketchfab.com/the_table)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/warhammer-40k-war-hammer-89b1ff844fff4e8f8a5b140d8e6ada28
Title: Warhammer 40k - War Hammer
*/
"use client";
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

const Staff = React.memo(function Staff(props) {
  const { nodes, materials } = useGLTF('/models/projects-transformed.glb')
  
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.012;
  });

  return (
    <group 
    {...props} 
    dispose={null}
    scale={[3, 3, 3]}
      position={[0.5, -0.2, 0]}
      ref={modelRef}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.DefaultMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.004}
      />
    </group>
  )
});

export default Staff;
useGLTF.preload('/models/projects-transformed.glb')