import Point from "../business/Point";
import Segment from "../business/Segment";

export default class Step {
  pointsGroups: Point[][];
  segmentsGroups: Segment[][];
  constructor() {
    this.pointsGroups = new Array<Array<Point>>();
    this.segmentsGroups = new Array<Array<Segment>>();
  }
  //TODO: Clone()
}
