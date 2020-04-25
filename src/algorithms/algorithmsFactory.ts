import IAlgorithm from "./IAlgorithm";
import simpleAlgorithm from "./simpleAlgorithm";

export default class AlgorithmsFactory {
  algorithms: IAlgorithm[];
  constructor() {
    this.algorithms = [new simpleAlgorithm()];
  }
  getAll(): IAlgorithm[] {
    return this.algorithms;
  }
}
