import Point from "../business/Point";
import { Scene, Mesh, CircleGeometry, MeshBasicMaterial, Color } from "three";

export default class PointDrawer {
  draw(points: Point[], scene: Scene, color: Color) {
    if (points.length === 0) return;
    for (let index = 0; index < points.length; index++) {
      const p = points[index];
      const geometry = new CircleGeometry(2, 10);
      const material = new MeshBasicMaterial({ color: color });
      const circle = new Mesh(geometry, material);
      circle.position.setX(p.x);
      circle.position.setY(p.y);
      scene.add(circle);
    }
  }
}
