import Step from "./step";
import Point from "../business/Point";
import Segment from "../business/Segment";
import IAlgorithm from "./IAlgorithm";

export default class simpleAlgorithm implements IAlgorithm {
  Run(inputPoints: Point[], inputSegments: Segment[]): Step[] {
    const onlyStep = new Step();
    onlyStep.pointsGroups.push(inputPoints);
    console.log("I am a simple algorithm");
    return [onlyStep];
  }
  Name(): string {
    return "Simple";
  }
}
