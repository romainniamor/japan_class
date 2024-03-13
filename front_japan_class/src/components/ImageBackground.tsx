import { useTexture } from "@react-three/drei";
import { Plane } from "@react-three/drei";

export default function ImageBackground() {
  const texture = useTexture("/japan_class.png");

  return (
    <mesh>
      <ambientLight />
      <Plane args={[35, 25]}>
        <meshPhongMaterial attach="material" map={texture} />
      </Plane>
    </mesh>
  );
}
