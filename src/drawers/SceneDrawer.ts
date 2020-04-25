import PointDrawer from "./PointDrawer";
import { Scene } from "three";
import SegmentDrawer from "./SegmentDrawer";
import Segment from "../business/Segment";
import Point from "../business/Point";
import Step from "../algorithms/step";
import StepDrawer from "./StepDrawer";
import ColorsGenerator from "./ColorsGenerator";

export default class SceneDrawer {
  pointDrawer: PointDrawer = new PointDrawer();
  segmentDrawer: SegmentDrawer = new SegmentDrawer();
  stepDrawer: StepDrawer = new StepDrawer();

  draw(
    scene: Scene,
    inputPoints: Point[],
    inputSegments: Segment[],
    beingDrawenPoint: Point | null,
    beingDrawenSegment: Segment | null,
    currentStep: Step | null
  ) {
    //TODO: Do that more efficiently
    //clearScene
    if (beingDrawenPoint) {
      inputPoints = [...inputPoints, beingDrawenPoint];
    }
    if (beingDrawenSegment) {
      inputSegments = [...inputSegments, beingDrawenSegment];
    }
    scene.remove.apply(scene, scene.children);
    this.pointDrawer.draw(
      inputPoints,
      scene,
      ColorsGenerator.getDefaultPointColor()
    );
    this.segmentDrawer.draw(
      inputSegments,
      scene,
      ColorsGenerator.getDefaultSegmentColor()
    );
    if (currentStep) this.stepDrawer.draw(currentStep, scene);
  }
}
