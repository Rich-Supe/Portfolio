## Welcome to my Portfofio Website!

## [Live](https://richsupe.com/)

### Stack:
  * JavaScript
  * HTML5 / CSS3
  * React
  * ThreeJs
  * Three-fiber
  * Gsap

### The scene:
  I created the environment first. The stars are over 3000 geometries within a positions array. This environment is set to a rotation using React-Three-Fibers useFrame. Each position is mapped with a points material and a custom star Png (I tried using stars instead of circles, but it was too much and crashed!).
```javascript
const imgTex = useLoader(THREE.TextureLoader, circleImg);
    const points = useRef();

    useFrame(() => {
        points.current.rotation.y -= 0.002;
        points.current.rotation.x -= 0.001;
    });

    const count = 3000;

    const [positions, sizes] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
        sizes[i] = Math.random() < 0.03 ? 15 : 6;
        }
```
  The planet is it's own geometry object with a custom normalMap texture. Each ring are also their own geometry object. The lights and shadows use a mixture of ThreeJs' pointLight, ambientLight, and spotLight components. These geometries are set to their own rotation to keep it unique from the environment. 

```javascript
const Planet = () => {
        return (
            <mesh> 
                <sphereBufferGeometry args={[1, 30, 30]} attach="geometry" />
                <meshStandardMaterial
                color={0xB93622}
                attach="material"
                map={colorMap} 
                metalness={0.3}
                />
            </mesh>
        );
    };
    
const SphereRing = () => {
        return (
            <mesh>
                <ringBufferGeometry args={[1.4, 1.5, 30, 30]} attach="geometry" />
                <meshStandardMaterial
                    color='orange'
                    attach="material"
                    side={DoubleSide}
                    metalness={0.4}
                />
            </mesh>
        );
    };

return (
                <group ref={group}>
                  <FakeSphere />
                  <SphereLight /> 
                  <SphereRing />
                  <SphereRing2 />
                  <SphereRing3 />
                  <ambientLight intensity={0.9} />
                  <pointLight intensity={1.12} position={[0, 0, 0]} />
                </group>
        );
}

```

  The animations over the scene use Gsap and are not part of the scene component. The have an absolute positioning with a z index, delayed transitions, etc.
  The rest of the app is pretty simple with easy navigation and user experience in mind. Hope you enjoy!
  


    





