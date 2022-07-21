import React from 'react'
import Cube from './Components/Cube'


function App() {
  return (
    <Cube/>
    
  )
}

export default App


// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "react-three-fiber";
// import * as THREE from "three";
// import './App.css'
// const Box = (props) => {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();

//   // Set up state for the hovered and active state 
//   const [active, setActive] = useState(false);

//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
//   });
//   return (
//     <mesh
//     {...props}
//     ref={mesh}
//     scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
//     onClick={(e) => setActive(!active)}
//       >
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
    
//       </meshBasicMaterial>
//     </mesh>
//   );
// }

// const App = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[2.5, 0, 0]} />
//       <Box position={[6.5, 0, 0]} />
//       <Box position={[-5.5, 0, 0]} />
//     </Canvas>
//   );
// }

// export default App;




// import { useState, useRef } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { useSpring, animated } from '@react-spring/three'

// function Cube(props) {
//   const mesh = useRef()
//   useFrame(() => (mesh.current.rotation.y += 0.01))
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   const { scale } = useSpring({ scale: active ? 1.5 : 1 })

//   return (
//     <animated.mesh ref={mesh}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//       onClick={(event) => setActive(!active)}
//       scale={scale}
//       {...props}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "white" : "lightgrey"} />
//     </animated.mesh>

//   )

// }

// function App() {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[5, 5, 5]} />
//       <Cube position={[-1.2, 0, 0]} />
//       <Cube position={[2. - 1, 0, 0]} />
//       <Cube position={[-3. - 2, 0, 0]} />
//       <Cube position={[-3.0, 0, 0]} />
//       <Cube position={[4. - 1, 0, 0]} />
//     </Canvas>
//   );
// }

// export default App;






// import { useEffect } from 'react';
// import "./App.css"
// import * as THREE from 'three';
// import { GUI } from 'dat.gui';

// import SceneInit from './lib/SceneInit';

// function App() {
//   useEffect(() => {
//     const test = new SceneInit('myThreeJsCanvas');
//     test.initialize();
//     test.animate();

//     const boxGeometry = new THREE.BoxGeometry(1,1,1,1,1,16);
//     const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00 });
//     const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
//     // boxMesh.position.x= -1;
//     test.scene.add(boxMesh);

//     // PART 1 - Initialize
//     const gui = new GUI();

    // PART 2 - Changing Geometry (scale, rotation)
    // gui.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    // gui.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
    // gui.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
    // gui.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
    // gui.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
    // gui.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');

    // PART 3 - Updating Material (color, wireframe)
    // const materialParams = {
    //   boxMeshColor: boxMesh.material.color.getHex(),
    // };
    // gui.add(boxMesh.material, 'wireframe');
    // gui
    //   .addColor(materialParams, 'boxMeshColor')
    //   .onChange((value) => boxMesh.material.color.set(value));

    // PART 4 - Refactor GUI with Folders
    // const geometryFolder = gui.addFolder('Mesh Geometry');
    // geometryFolder.open();
    // const rotationFolder = geometryFolder.addFolder('Rotation');
    // rotationFolder.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    // rotationFolder.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
    // rotationFolder.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
    // const scaleFolder = geometryFolder.addFolder('Scale');
    // scaleFolder.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
    // scaleFolder.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
    // scaleFolder.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');
    // scaleFolder.open();

    // const materialFolder = gui.addFolder('Mesh Material');
    // const materialParams = {
    //   boxMeshColor: boxMesh.material.color.getHex(),
    // };
    // materialFolder.add(boxMesh.material, 'wireframe');
    // materialFolder
    //   .addColor(materialParams, 'boxMeshColor')
    //   .onChange((value) => boxMesh.material.color.set(value));

    // Destroy the GUI on reload to prevent multiple stale UI from being displayed on screen.
//     return () => {
//       gui.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <canvas id="myThreeJsCanvas" />
//     </div>
//   );
// }

// export default App;








