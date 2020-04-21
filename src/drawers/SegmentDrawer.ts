import Segment from "../business/Segment";
import { Scene, LineBasicMaterial, BufferGeometry, Vector2, Line } from "three";

export default class SegmentDrawer {
  draw(segments: Segment[], scene: Scene) {
    if (segments.length === 0)
      return [];
      
    for (let index = 0; index < segments.length; index++) {
      const segment = segments[index];
      const material = new LineBasicMaterial({
        color: 0x0000ff
      });

      const points: Vector2[] = [];
      points.push(segment.start.toVector2());
      points.push(segment.end.toVector2());

      const geometry = new BufferGeometry().setFromPoints(points);

      const line = new Line(geometry, material);
      scene.add(line);
    }
  }
}