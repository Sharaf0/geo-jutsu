import Point from "./dataStructures/Point";

/*
It is assumed here that coordinates plane start from -maxWidth/2 to maxWidth/2 and from -maxHeight/2 to maxHeight/2
*/
export const generateRandomPoints = (
  n: number,
  maxHeight: number,
  maxWidth: number
): Point[] => {
  const points: Point[] = [];
  for (let index = 0; index < n; index++) {
    const randomX = maxWidth * Math.random() - maxWidth / 2;
    const randomY = maxHeight * Math.random() - maxHeight / 2;
    points.push(new Point(randomX, randomY));
  }

  return points;
};

export const E = 1e-5;

export const doubleEqual = (a: number, b: number): boolean => {
  return Math.abs(a - b) < E;
};

export const getUniqueElements = function <T>(lst: T[]): T[] {
  return Array.from(new Set(lst));
};
