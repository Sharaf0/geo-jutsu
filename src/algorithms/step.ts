import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";

export default class Step {
  pointsGroups: Point[][];
  segmentsGroups: Segment[][];
  constructor() {
    this.pointsGroups = new Array<Array<Point>>();
    this.segmentsGroups = new Array<Array<Segment>>();
  }
  equals(step: Step): boolean {
    if (
      this.pointsGroups.length !== step.pointsGroups.length ||
      this.segmentsGroups.length !== step.segmentsGroups.length
    )
      return false;

    for (let i = 0; i < this.pointsGroups.length; i++) {
      if (this.pointsGroups[i].length !== step.pointsGroups[i].length)
        return false;

      for (let j = 0; j < this.pointsGroups[i].length; j++) {
        const point = this.pointsGroups[i][j];
        if (!point.equals(step.pointsGroups[i][j])) return false;
      }
    }

    for (let i = 0; i < this.segmentsGroups.length; i++) {
      if (this.segmentsGroups[i].length !== step.segmentsGroups[i].length)
        return false;
      for (let j = 0; j < this.segmentsGroups[i].length; j++) {
        const segment = this.segmentsGroups[i][j];
        if (!segment.equals(step.segmentsGroups[i][j])) return false;
      }
    }
    return true;
  }
  //TODO: Clone()
}
