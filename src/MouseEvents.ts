import Point from "./dataStructures/Point";
import Segment from "./dataStructures/Segment";

export default class MouseEvents {
  canvas: HTMLCanvasElement;
  constructor() {
    this.canvas = document.getElementById(
      "element that does not exist"
    ) as HTMLCanvasElement;
  }
  private getPoint(mouseX: number, mouseY: number): Point {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    const scaledPoint = new Point(
      (mouseX - rect.left) * scaleX,
      (mouseY - rect.top) * scaleY
    );

    const transformedPoint = new Point(
      scaledPoint.x - this.canvas.width / 2,
      this.canvas.height / 2 - scaledPoint.y
    );
    return transformedPoint;
  }
  onMouseDown(
    drawingMode: string,
    e: React.MouseEvent
  ): (Point | Segment | /*Polygon |*/ null)[] {
    if (!this.canvas || e.button !== 0) return [null, null, null];

    if (drawingMode === "Point") {
      const point = this.getPoint(e.clientX, e.clientY);
      return [point, null, null];
    }

    return [null, null, null];
  }
  onMouseMove(
    drawingMode: string,
    e: React.MouseEvent
  ): (Point | Segment | /*Polygon |*/ null)[] {
    if (!this.canvas) return [null, null, null];
    if (drawingMode === "Nothing") return [null, null, null];
    if (drawingMode === "Point") {
      const point = this.getPoint(e.clientX, e.clientY);
      return [point, null, null];
    }
    return [null, null, null];
  }
}
