import React, { useRef, useEffect, useState } from 'react';
import {
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  BoxGeometry,
  Color,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
} from "three";

function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById('element that does not exist') as HTMLCanvasElement;
}

function initArray() {
  var points = new Array<Vector3>();
  const zoom = 0;
  points.push(new Vector3(-250, 0, zoom));
  points.push(new Vector3(250, 0, zoom));
  points.push(new Vector3(0, 250, zoom));
  points.push(new Vector3(0, -250, zoom));
  return points;
}


function Drawer() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());
  const [points, setPoints] = useState<Array<Vector3>>(initArray());
  const [scene] = useState<Scene>(new Scene());
  useEffect(() => {
    const renderer = new WebGLRenderer({ canvas: myCanvas.current });
    renderer.setClearColor(new Color('white'));
    console.log(myCanvas.current.width, myCanvas.current.height);
    const camera = new OrthographicCamera(- myCanvas.current.width / 2, myCanvas.current.width / 2, myCanvas.current.height / 2, myCanvas.current.height / -2, 0.01, 2000);
    console.log(camera.left, camera.right, camera.top, camera.bottom);
    camera.position.z = 50;
    const geometry = new BoxGeometry();
    const cube2 = new Mesh(geometry, new MeshBasicMaterial({ color: 0x00ffff }));

    cube2.position.x = 0;

    scene.add(cube2);
    const animate = function () {
      requestAnimationFrame(animate);
      cube2.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, [scene]);

  useEffect(() => {
    console.log(`use effect's called`);
    if (points.length > 0) {
      const geometry = new BufferGeometry().setFromPoints(points);
      const material = new LineBasicMaterial({ color: 0x0000ff });
      const line = new Line(geometry, material);
      scene.add(line);
    }
  }, [points, scene]);

  function onMouseDown(e: React.MouseEvent) {
    // const rect = myCanvas.current.getBoundingClientRect();
    // const point = new Vector3(e.clientX - rect.left, e.clientY - rect.top, 0);
    // point.unproject(camera);
    // setPoints([...points, point]);
    //Helper.Compute(e.clientX, e.clientY, camera, vProjectedMousePos, myCanvas.current);
    const point = new Vector3(e.clientX, e.clientY, 0);
    setPoints([...points, point])
    console.log('clicked..');
  }

  return (
    <canvas onMouseDown={onMouseDown} ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
