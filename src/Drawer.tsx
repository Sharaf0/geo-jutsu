import React, { useRef, useEffect, useState, useMemo } from 'react';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  Color,
} from "three";
import Point from './business/Point';
import Segment from './business/Segment';
import SceneDrawer from './drawers/SceneDrawer';
import MouseEvents from './MouseEvents';

//FIXME: We should not need that.
function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById('element that does not exist') as HTMLCanvasElement;
}

function Drawer() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());
  const [inputPoints, setInputPoints] = useState<Point[]>([]);
  const [inputSegments, setInputSegments] = useState<Segment[]>([]);
  const [scene] = useState<Scene>(new Scene());
  const sceneDrawer = useMemo(() => new SceneDrawer(), []);
  const mouseEvents = useMemo(() => new MouseEvents(), []);

  useEffect(() => {
    const renderer = new WebGLRenderer({ canvas: myCanvas.current });
    renderer.setClearColor(new Color('white'));
    const camera = new OrthographicCamera(- myCanvas.current.width / 2, myCanvas.current.width / 2, myCanvas.current.height / 2, myCanvas.current.height / -2, 0.01, 2000);
    camera.position.z = 50;
    mouseEvents.canvas = myCanvas.current;
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

  const onMouseDown = function (e: React.MouseEvent) {
    const res = mouseEvents.onMouseDown(e);
    if (res.length !== 3)
      throw Error('onMouseDown must return 3 items, (Point | Segment | Polygon | null)')
    const point = res[0] as Point;
    const segment = res[1] as Segment;
    if (point)
      setInputPoints([...inputPoints, point]);
    if (segment)
      setInputSegments([...inputSegments, segment]);
  }

  return (
    <canvas onMouseDown={onMouseDown} ref={myCanvas} width="500" height="500" style={{ border: "1px solid black" }}></canvas>
  );
}

export default Drawer;
