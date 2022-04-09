export class Recipe {
  public name: string = '';
  public description: string = '';
  public imagePath: string = '';

  public constructor(name: string, description: string, imagePage: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePage;
  }
}
