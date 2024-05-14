import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/models/Astronaut.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['node-0'].geometry}
        material={materials.Astronaut_mat}
      />
    </group>
  )
}

export default Model;
useGLTF.preload('/models/Astronaut.glb')
