import { Scene } from "three";
import Step from "../algorithms/step";
import PointDrawer from "./PointDrawer";
import SegmentDrawer from "./SegmentDrawer";
import ColorsGenerator from "./ColorsGenerator";

export default class StepDrawer {
  pointDrawer: PointDrawer;
  segmentDrawer: SegmentDrawer;
  constructor() {
    this.pointDrawer = new PointDrawer();
    this.segmentDrawer = new SegmentDrawer();
  }
  draw(step: Step, scene: Scene) {
    if (!step || !step.pointsGroups.length || !step.segmentsGroups.length)
      return;

    for (let index = 0; index < step.pointsGroups.length; index++) {
      const pointsGroup = step.pointsGroups[index];
      this.pointDrawer.draw(
        pointsGroup,
        scene,
        ColorsGenerator.getRandomPointsGroupColor(index)
      );
    }

    for (let index = 0; index < step.segmentsGroups.length; index++) {
      const segmentsGroup = step.segmentsGroups[index];
      this.segmentDrawer.draw(
        segmentsGroup,
        scene,
        ColorsGenerator.getRandomSegmentsGroupColor(index)
      );
    }
  }
}
