import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";

export default class Step {
  pointsGroups: Point[][];
  segmentsGroups: Segment[][];
  constructor() {
    this.pointsGroups = new Array<Array<Point>>();
    this.segmentsGroups = new Array<Array<Segment>>();
  }
  //TODO: Clone()
}
