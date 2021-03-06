import PointDrawer from "./PointDrawer";
import { Scene } from "three";
import SegmentDrawer from "./SegmentDrawer";
import Segment from "../dataStructures/Segment";
import Point from "../dataStructures/Point";
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
    scene.remove.apply(scene, scene.children);

    if (currentStep) {
      this.stepDrawer.draw(currentStep, scene);
    } else {
      if (beingDrawenPoint) {
        inputPoints = [...inputPoints, beingDrawenPoint];
      }
      if (beingDrawenSegment) {
        inputSegments = [...inputSegments, beingDrawenSegment];
      }
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
    }
  }
}
