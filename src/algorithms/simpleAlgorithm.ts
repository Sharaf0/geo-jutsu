import Step from "./step";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";
import IAlgorithm from "./IAlgorithm";

export default class simpleAlgorithm implements IAlgorithm {
  Run(inputPoints: Point[], inputSegments: Segment[]): Step[] {
    const steps = inputPoints.map((point) => {
      const step = new Step();
      step.pointsGroups.push([point]);
      return step;
    });
    return steps;
  }
  Name(): string {
    return "Simple";
  }
}
