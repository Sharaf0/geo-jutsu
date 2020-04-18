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
    //console.log(`use effect 1's called`);
    const renderer = new WebGLRenderer({ canvas: myCanvas.current });
    renderer.setClearColor(new Color('white'));
    //console.log(myCanvas.current.width, myCanvas.current.height);
    const camera = new OrthographicCamera(- myCanvas.current.width / 2, myCanvas.current.width / 2, myCanvas.current.height / 2, myCanvas.current.height / -2, 0.01, 2000);
    //console.log(camera.left, camera.right, camera.top, camera.bottom);
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
    //console.log(`use effect's called`);
    if (points.length > 0) {
      const geometry = new BufferGeometry().setFromPoints(points);
      const material = new LineBasicMaterial({ color: 0x0000ff });
      const line = new Line(geometry, material);
      scene.add(line);
    }
  }, [points, scene]);

  function getMousePos(canvas: HTMLCanvasElement, evt: React.MouseEvent) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

    return {
      x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
  }

  function onMouseDown(e: React.MouseEvent) {
    const point = new Vector3(e.clientX, e.clientY, 0);
    console.log(point.x, point.y);

    const scaledPoint = getMousePos(myCanvas.current, e);
    console.log(scaledPoint.x, scaledPoint.y);

    const transformedPoint = new Vector3(scaledPoint.x - myCanvas.current.width / 2,
      myCanvas.current.height / 2 - scaledPoint.y);

    console.log(transformedPoint.x, transformedPoint.y);

    setPoints([...points, transformedPoint])
    //console.log('clicked..');
  }

  return (
    <canvas onMouseDown={onMouseDown} ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
