import PointDrawer from "./PointDrawer";
import { Scene, Color } from "three";
import SegmentDrawer from "./SegmentDrawer";
import Segment from "../business/Segment";
import Point from "../business/Point";

export default class SceneDrawer {
  pointDrawer: PointDrawer = new PointDrawer();
  segmentDrawer: SegmentDrawer = new SegmentDrawer();

  draw(scene: Scene, inputPoints: Array<Point>, inputSegments: Array<Segment>) {
        //clearScene
    //TODO: Do that more efficiently
    scene.remove.apply(scene, scene.children);
    this.pointDrawer.draw(inputPoints, scene, new Color('green'));
    this.segmentDrawer.draw(inputSegments, scene);
  }
}