import React, { useRef, useEffect, useState } from 'react';
import {
  Vector3,
  WebGLRenderer,
  OrthographicCamera,
  Scene,
  LineBasicMaterial,
  BufferGeometry,
  Line,
} from "three";

function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById('element that does not exist') as HTMLCanvasElement;
}

function getStartPoints(): Array<Vector3> {
  const points = [];
  points.push(new Vector3(0, -10, 0));
  points.push(new Vector3(-10, 0, 0));
  points.push(new Vector3(0, 10, 0));
  points.push(new Vector3(10, 0, 0));
  points.push(new Vector3(0, -10, 0));
  points.push(new Vector3(20, 20, 0));
  return points;
}

const scene = new Scene();

function Drawer() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());
  const [points] = useState<Array<Vector3>>(getStartPoints());

  useEffect(() => {
    const renderer = new WebGLRenderer({ canvas: myCanvas.current });
    const camera = new OrthographicCamera(45, (myCanvas.current.getBoundingClientRect().width) / (myCanvas.current.getBoundingClientRect().height), 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const material = new LineBasicMaterial({ color: 0x0000ff });
    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    scene.add(line);
    renderer.render(scene, camera);
  }, [points]);

  return (
    <canvas ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
