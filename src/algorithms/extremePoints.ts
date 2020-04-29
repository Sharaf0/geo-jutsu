import Step from "./step";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";
import IAlgorithm from "./IAlgorithm";
import { getUniqueElements } from "../utilities";
import Triangle from "../dataStructures/Triagnle";

export default class extremePointsAlgorithm implements IAlgorithm {
  unique<T>(...args: T[]): boolean {
    return new Set(arguments).size === arguments.length;
  }

  withoutIndices<T>(elements: T[], indices: number[]): T[] {
    const res: T[] = [];
    for (let index = 0; index < elements.length; index++) {
      if (indices.indexOf(index) === -1) {
        res.push(elements[index]);
      }
    }
    return res;
  }

  Run(inputPoints: Point[], inputSegments: Segment[]): Step[] {
    const sortedPoints = inputPoints.sort((a: Point, b: Point): number => {
      if (a.less(b)) return -1;
      else if (a.equals(b)) return 0;
      //a > b
      else return 1;
    });

    const uniquePoints = getUniqueElements(sortedPoints);

    if (uniquePoints.length < 3) {
      if (uniquePoints.length === 2) {
        const step = new Step();
        step.segmentsGroups.push([
          //uniquePoints[0], uniquePoints[1]
          new Segment(new Point(1, 1), new Point(1, 1)),
        ]);
        return [step];
      }
    }

    const steps: Step[] = [];

    const deletedPoints: Point[] = [];
    const deletedIndices: number[] = [];

    for (let i = 0; i < uniquePoints.length; i++) {
      if (deletedIndices.find((x) => x === i)) continue;
      for (let j = 0; j < uniquePoints.length; j++) {
        if (deletedIndices.find((x) => x === j)) continue;
        for (let k = 0; k < uniquePoints.length; k++) {
          if (deletedIndices.find((x) => x === k)) continue;
          const tri = new Triangle(
            uniquePoints[i],
            uniquePoints[j],
            uniquePoints[k]
          );

          for (let z = 0; z < uniquePoints.length; z++) {
            if (!this.unique(i, j, k, z)) continue;
            if (deletedIndices.find((x) => x === z)) continue;

            const p = uniquePoints[z];

            if (!p.equals(tri.a) && !p.equals(tri.b) && !p.equals(tri.c)) {
              if (tri.hasPointInside(p) || tri.hasPointOn(p)) {
                const beforeDeleteStep = new Step();
                beforeDeleteStep.segmentsGroups = [[tri.ab, tri.bc, tri.ca]];
                beforeDeleteStep.pointsGroups = [
                  this.withoutIndices(uniquePoints, deletedIndices),
                  [p],
                ];
                    deletedPoints.push(uniquePoints[z]);
            deletedIndices.push(z);

                const afterDeleteStep = new Step();
                afterDeleteStep.segmentsGroups = [[tri.ab, tri.bc, tri.ca]];
                afterDeleteStep.pointsGroups = [
                  this.withoutIndices(uniquePoints, deletedIndices),
                ];

                steps.push(beforeDeleteStep);
                steps.push(afterDeleteStep);
              }
            }
          }
        }
      }
    }
    const onlyStep = new Step();
    onlyStep.pointsGroups = [this.withoutIndices(uniquePoints, deletedIndices)];

    return [...steps, onlyStep];
  }
  Name(): string {
    return "Extreme Points";
  }
}
