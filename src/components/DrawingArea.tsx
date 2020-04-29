import React, { useRef, useEffect, useState, useMemo, useContext } from "react";
import { WebGLRenderer, Scene, OrthographicCamera, Color } from "three";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";
import SceneDrawer from "../drawers/SceneDrawer";
import MouseEvents from "../MouseEvents";
import { drawingModeContext } from "../contexts/DrawingModeContext";
import { algorithmStepsContext } from "../contexts/AlgorithmStepsContext";
import { inputDrawingsContext } from "../contexts/InputDrawingsContext";
import { generateRandomPoints } from "../utilities";

//FIXME: We should not need that.
function getTempCanvas(): HTMLCanvasElement {
  return document.getElementById(
    "element that does not exist"
  ) as HTMLCanvasElement;
}
function DrawingArea() {
  const myCanvas = useRef<HTMLCanvasElement>(getTempCanvas());
  const [scene] = useState<Scene>(new Scene());
  const sceneDrawer = useMemo(() => new SceneDrawer(), []);
  const mouseEvents = useMemo(() => new MouseEvents(), []);
  const { drawingMode } = useContext(drawingModeContext);
  const { currentStep } = useContext(algorithmStepsContext);
  const {
    addPoint,
    addPoints,
    addSegment,
    inputPoints,
    inputSegments,
  } = useContext(inputDrawingsContext);
  const [beingDrawenPoint, setBeingDrawenPoint] = useState<Point | null>(null);
  const [beingDrawenSegment, setBeingDrawenSegment] = useState<Segment | null>(
    null
  );
  const [isDrawingStep, setIsDrawingStep] = useState<boolean>(false);
  useEffect(() => {
    setIsDrawingStep(currentStep !== null);
  }, [currentStep]);
  useEffect(() => {
    const renderer = new WebGLRenderer({ canvas: myCanvas.current });
    renderer.setClearColor(new Color("white"));
    const camera = new OrthographicCamera(
      -myCanvas.current.width / 2,
      myCanvas.current.width / 2,
      myCanvas.current.height / 2,
      myCanvas.current.height / -2,
      0.01,
      2000
    );
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
    sceneDrawer.draw(
      scene,
      inputPoints,
      inputSegments,
      beingDrawenPoint,
      beingDrawenSegment,
      currentStep
    );
  }, [
    inputPoints,
    inputSegments,
    beingDrawenPoint,
    beingDrawenSegment,
    sceneDrawer,
    scene,
    currentStep,
  ]);

  const onMouseDown = function (e: React.MouseEvent) {
    if (isDrawingStep) return;
    const res = mouseEvents.onMouseDown(drawingMode, e);
    if (res.length !== 3)
      throw Error("onMouseDown must return 3 items, [Point, Segment, Polygon]");
    const point = res[0] as Point;
    const segment = res[1] as Segment;
    if (point) addPoint(point);
    if (segment) addSegment(segment);
  };

  const onMouseMove = function (e: React.MouseEvent) {
    if (isDrawingStep) return;
    const res = mouseEvents.onMouseMove(drawingMode, e);
    if (res.length !== 3)
      throw Error("onMouseMove must return 3 items, [Point, Segment, Polygon]");
    const point = res[0] as Point;
    const segment = res[1] as Segment;
    if (point) setBeingDrawenPoint(point);
    if (segment) setBeingDrawenSegment(segment);
  };

  const onMouseLeave = function () {
    setBeingDrawenPoint(null);
    setBeingDrawenSegment(null);
  };

  const generateRandom = (n: number) => {
    const points = generateRandomPoints(
      n,
      myCanvas.current.height,
      myCanvas.current.width
    );
    addPoints(points);
  };

  return (
    <>
      <canvas
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        ref={myCanvas}
        width="500"
        height="500"
        style={{ border: "1px solid black" }}
      ></canvas>
      {/* <button>Clear</button> */}
      <div>
        Generate Random Points:
        <button onClick={() => generateRandom(10)}>10</button>
        <button onClick={() => generateRandom(100)}>100</button>
        <button onClick={() => generateRandom(1000)}>1000</button>
      </div>
    </>
  );
}

export default DrawingArea;
