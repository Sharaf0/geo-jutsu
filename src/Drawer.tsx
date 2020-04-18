import React, { useRef, useEffect, useState } from 'react';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  Color,
  Vector3,
  CircleGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";

//FIXME: We should not need that.
function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById('element that does not exist') as HTMLCanvasElement;
}

function Drawer() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());
  const [points, setPoints] = useState<Array<Vector3>>([]);
  const [scene] = useState<Scene>(new Scene());
  useEffect(() => {
    const renderer = new WebGLRenderer({ canvas: myCanvas.current });
    renderer.setClearColor(new Color('white'));
    const camera = new OrthographicCamera(- myCanvas.current.width / 2, myCanvas.current.width / 2, myCanvas.current.height / 2, myCanvas.current.height / -2, 0.01, 2000);
    camera.position.z = 50;
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, [scene]);

  useEffect(() => {
    if (points.length > 0) {
      for (let index = 0; index < points.length; index++) {
        const p = points[index];
        const geometry = new CircleGeometry(2, 10);
        const material = new MeshBasicMaterial({ color: 0x0000ff });
        const circle = new Mesh(geometry, material);
        circle.position.setX(p.x);
        circle.position.setY(p.y);
        scene.add(circle);
      }
    }
  }, [points, scene]);

  function onMouseDown(e: React.MouseEvent) {
    const rect = myCanvas.current.getBoundingClientRect();
    const scaleX = myCanvas.current.width / rect.width;
    const scaleY = myCanvas.current.height / rect.height;

    const scaledPoint = new Vector3((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);

    const transformedPoint = new Vector3(scaledPoint.x - myCanvas.current.width / 2,
      myCanvas.current.height / 2 - scaledPoint.y);

    setPoints([...points, transformedPoint])
  }

  return (
    <canvas onMouseDown={onMouseDown} ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
