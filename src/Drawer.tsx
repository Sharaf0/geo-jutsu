import React, { useRef, useEffect, useState, useMemo } from 'react';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  Color,
  Vector2,
} from "three";
import Point from './business/Point';
import Segment from './business/Segment';
import SceneDrawer from './drawers/SceneDrawer';

//FIXME: We should not need that.
function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById('element that does not exist') as HTMLCanvasElement;
}

function Drawer() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());
  const [inputPoints, setInputPoints] = useState<Array<Point>>([]);
  const [inputSegments] = useState<Array<Segment>>([]);
  const [scene] = useState<Scene>(new Scene());
  const sceneDrawer = useMemo(() => new SceneDrawer(), []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sceneDrawer.draw(scene, inputPoints, inputSegments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputPoints, inputSegments]);

  function onMouseDown(e: React.MouseEvent) {
    const rect = myCanvas.current.getBoundingClientRect();
    const scaleX = myCanvas.current.width / rect.width;
    const scaleY = myCanvas.current.height / rect.height;

    const scaledPoint = new Vector2((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);

    const transformedPoint = new Point(scaledPoint.x - myCanvas.current.width / 2,
      myCanvas.current.height / 2 - scaledPoint.y);

    setInputPoints([...inputPoints, transformedPoint])
  }

  return (
    <canvas onMouseDown={onMouseDown} ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
