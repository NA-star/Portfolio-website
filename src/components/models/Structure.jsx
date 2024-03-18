/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: cotman sam (https://sketchfab.com/cotman_sam)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ncr-veteran-ranger-bobblehead-1b47d75b4e5a4548b5cb41aae45f8dcd
Title: NCR veteran ranger bobblehead
*/
"use client";
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

const Structure = React.memo(function Structure(props) {
  const { nodes, materials } = useGLTF('/models/home-transformed.glb')

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y = -0.8 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group 
    {...props} 
    dispose={null} 
    ref={modelRef} 
    position={[0, -0.8, 0]} 
    scale={[0.035, 0.035, 0.035]} 
    rotation={[0.30, 0, 0]}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_6.geometry}
        material={materials.Material_152}
        skeleton={nodes.Object_6.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.Material_108}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_10.geometry}
        material={materials.Material_103}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_12.geometry}
        material={materials.Material_104}
        skeleton={nodes.Object_12.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_14.geometry}
        material={materials.Material_102}
        skeleton={nodes.Object_14.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_16.geometry}
        material={materials.Material_243}
        skeleton={nodes.Object_16.skeleton}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box009_Material_#105_0'].geometry}
        material={materials.Material_105}
        position={[0.714, 7.651, -19.607]}
        rotation={[-Math.PI / 2, 0, -1.658]}
        scale={0.805}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box011_Material_#243_0'].geometry}
        material={materials.Material_243}
        position={[-0.016, 21.641, -17.889]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cop002_Material_#106_0'].geometry}
        material={materials.Material_106}
        position={[0, -2.026, -7.014]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder012_Material_#130_0'].geometry}
        material={materials.Material_130}
        position={[-4.697, 54.401, 7.274]}
        rotation={[0.856, -0.889, 0.98]}
        scale={[1, 1, 0.756]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['arm004_Material_#107_0'].geometry}
        material={materials.Material_107}
        position={[-0.091, -2.833, -10.702]}
        rotation={[-Math.PI / 2, 0, 0.026]}
        scale={1.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder013_Material_#218_0'].geometry}
        material={materials.Material_218}
        position={[-1.749, 0.563, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box013_Material_#219_0'].geometry}
        material={materials.Material_219}
        position={[-11.87, 0.563, 6.453]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder014_Material_#175_0'].geometry}
        material={materials.Material_175}
        position={[-23.472, 6.366, 9.246]}
        rotation={[-1.66, 0.085, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Plane001_Material_#153_0'].geometry}
        material={materials.Material_153}
        position={[-36.546, 76.954, 26.659]}
        rotation={[0.004, 0.897, -1.704]}
        scale={[0.948, 0.855, 0.855]}
      />
    </group>
  );
});

export default Structure;
useGLTF.preload('/models/home-transformed.glb')