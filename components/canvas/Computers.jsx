import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
 
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={10} />
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[5, 10, 20]} />
      <spotLight
        
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> 
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -3, -1] : [0, -3.35, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
     
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);
    const handleMediQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop = 'demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;