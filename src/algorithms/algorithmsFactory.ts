import IAlgorithm from "./IAlgorithm";
import simpleAlgorithm from "./simpleAlgorithm";
import extremePointsAlgorithm from "./extremePoints";

export default class AlgorithmsFactory {
  algorithms: IAlgorithm[];
  constructor() {
    this.algorithms = [new simpleAlgorithm(), new extremePointsAlgorithm()];
  }
  getAll(): IAlgorithm[] {
    return this.algorithms;
  }
}
