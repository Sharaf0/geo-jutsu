import Point from "./business/Point";
import Segment from "./business/Segment";

export default class MouseEvents {
  canvas: HTMLCanvasElement;
  constructor() {
    this.canvas = document.getElementById('element that does not exist') as HTMLCanvasElement;
  }
  onMouseDown(e: React.MouseEvent): (Point | Segment | /*Polygon |*/ null)[] {
    if (e.button !== 0)
      return [null, null, null];

    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    const scaledPoint = new Point((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);

    const transformedPoint = new Point(scaledPoint.x - this.canvas.width / 2,
      this.canvas.height / 2 - scaledPoint.y);

    return [transformedPoint, null, null];
  }
}