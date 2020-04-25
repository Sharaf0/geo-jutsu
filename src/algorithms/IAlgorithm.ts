import Step from "./step";
import Point from "../business/Point";
import Segment from "../business/Segment";
export default interface IAlgorithm {
  Run(inputPoints: Point[], inputSegments: Segment[]): Step[];
  Name(): string;
}
