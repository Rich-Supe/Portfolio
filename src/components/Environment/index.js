
import styles from './Environment.module.css'
import React, { useMemo, useRef } from "react";
import * as THREE from 'three'
import { useLoader, useFrame } from 'react-three-fiber'
import circleImg from '../../assets/circle.png'
import starImg from '../../assets/stars.png'
// import { BackSide } from "three";

function Environment() {
    const imgTex = useLoader(THREE.TextureLoader, circleImg);
    const points = useRef();

    useFrame(() => {
        points.current.rotation.y -= 0.0005;
        points.current.rotation.x -= 0.00025;
    });

    const count = 3000;

    const [positions, sizes] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
        sizes[i] = Math.random() < 0.03 ? 15 : 6;
        }

        return [positions, sizes];
    }, []);

    return (
        <points ref={points}>
        <bufferGeometry>
            <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
            />
        </bufferGeometry>
        <pointsMaterial 
            // size={0.03}
            // map={imgTex}
            attach="material"
            map={imgTex}
            // color={0x00AAFF}
            // color='red'
            size={0.04}
            // size={.2}
            sizeAttenuation
            transparent={false}
            alphaTest={0.5}
            opacity={1.0}
        />
        </points>
    );
}

export default Environment;
