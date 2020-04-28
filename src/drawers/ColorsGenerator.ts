import { Color } from "three";

export default class ColorsGenerator {
  private static pointsGroupColors: Color[] = new Array<Color>();
  private static segmentsGroupColors: Color[] = new Array<Color>();
  private static allColors: { [key: number]: number } = {};

  private static getRandomColor(): number {
    return Math.floor(Math.random() * 0xffffff);
  }

  private static getNewRandomColorHex(): number {
    let suggestedColorHex = ColorsGenerator.getRandomColor();
    while (suggestedColorHex in ColorsGenerator.allColors) {
      suggestedColorHex = ColorsGenerator.getRandomColor();
    }

    ColorsGenerator.allColors[suggestedColorHex] = suggestedColorHex;
    return suggestedColorHex;
  }

  private static getNewPointsGroupColor(): Color {
    const newColorHex = ColorsGenerator.getNewRandomColorHex();
    const color = new Color();
    color.setHex(newColorHex);
    ColorsGenerator.pointsGroupColors.push(color);
    return color;
  }

  private static getNewSegmentsGroupColor(): Color {
    const newColorHex = ColorsGenerator.getNewRandomColorHex();
    const color = new Color();
    color.setHex(newColorHex);
    ColorsGenerator.segmentsGroupColors.push(color);
    return color;
  }

  public static getRandomPointsGroupColor(index: number): Color {
    if (ColorsGenerator.pointsGroupColors.length > index)
      return ColorsGenerator.pointsGroupColors[index];
    else {
      return ColorsGenerator.getNewPointsGroupColor();
    }
  }

  public static getRandomSegmentsGroupColor(index: number): Color {
    if (ColorsGenerator.segmentsGroupColors.length > index)
      return ColorsGenerator.segmentsGroupColors[index];
    else {
      return ColorsGenerator.getNewSegmentsGroupColor();
    }
  }

  public static getDefaultPointColor(): Color {
    const color = new Color("red");
    ColorsGenerator.allColors[color.getHex()] = color.getHex();
    return color;
  }

  public static getDefaultSegmentColor(): Color {
    const color = new Color("blue");
    ColorsGenerator.allColors[color.getHex()] = color.getHex();
    return color;
  }
}
