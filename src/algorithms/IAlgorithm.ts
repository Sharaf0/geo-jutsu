import Step from "./step";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";
export default interface IAlgorithm {
  Run(inputPoints: Point[], inputSegments: Segment[]): Step[];
  Name(): string;
}
