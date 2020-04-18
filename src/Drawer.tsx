import React, { useRef, useEffect } from 'react';
import {
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
} from "three";

function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById('element that does not exist') as HTMLCanvasElement;
}

function Drawer() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());

  useEffect(() => {
    var scene = new Scene();
    var camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new WebGLRenderer({canvas: myCanvas.current});

    var geometry = new BoxGeometry();
    var material = new MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  });

  return (
    <canvas ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
