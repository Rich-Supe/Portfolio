
import * as THREE from 'three'
import React, { useRef } from 'react'
import { DoubleSide } from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import './Geometry.css'
import texture from '../../assets/normalMap.png'

function Geometry() {
    const group = useRef();
    const colorMap = useLoader(TextureLoader, texture)

    useFrame(() => {
        group.current.rotation.y += 0.001;
        group.current.rotation.x += 0.0017;
    });

    const FakeSphere = () => {
        return (
            <mesh> 
                <sphereBufferGeometry args={[1.15, 30, 30]} attach="geometry" />
                {/* <meshPhongMaterial */}
                <meshStandardMaterial
                // color={0xB93622} Reddish
                // color={0xF39C12} Yellowish
                color={0xE67E22}
                emissive={0xB93622}
                emissiveIntensity={0.3}
                attach="material"
                map={colorMap} 
                metalness={0.4}
                roughness={0.9}
                // wireframe={true}
                // vertexColors={true}
                // fog={true}
                />
            </mesh>
        );
    };

    // const SphereLight = () => {
    //     return (
    //         <mesh>
    //           <sphereBufferGeometry args={[.8, 35, 35]} attach="geometry" />
    //           <meshStandardMaterial
    //             color={0xedd59e}
    //             attach="material"
    //             side={BackSide}
    //             metalness={0.4}
    //           />
    //         </mesh>
    //     );
    // };

    const SphereRing3 = () => {
        return (
            <mesh>
                <ringBufferGeometry args={[1.7, 1.75, 30, 30]} attach="geometry" />
                <meshStandardMaterial
                // <meshPhongMaterial 
                    // size={0.1}
                    color='yellow'
                    attach="material"
                    side={DoubleSide}
                    metalness={0.4}
                />
            </mesh>
        );
    };

    const SphereRing = () => {
        return (
            <mesh>
                <ringBufferGeometry args={[1.55, 1.65, 30, 30]} attach="geometry" />
                <meshStandardMaterial
                // <meshPhongMaterial 
                    // size={0.1}
                    color='orange'
                    attach="material"
                    side={DoubleSide}
                    metalness={0.5}
                />
            </mesh>
        );
    };

    const SphereRing2 = () => {
        return (
            <mesh>
                <ringBufferGeometry args={[1.43, 1.5, 30, 30]} attach="geometry" />
                <meshStandardMaterial
                // <meshPhongMaterial 
                    // size={0.1}
                    color='red'
                    attach="material"
                    side={DoubleSide}
                    metalness={0.6}
                    // wireframe={true}
                />
            </mesh>
        );
    };
    
        return (
                <group ref={group}>
                        <FakeSphere />
                {/* <SphereLight /> */}
                <SphereRing />
                <SphereRing2 />
                <SphereRing3 />
                <ambientLight intensity={0.9} />
                <pointLight intensity={1.12} position={[0, 0, 0]} />
                </group>
        );
}

export default Geometry;