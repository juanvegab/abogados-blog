export class PostModel {
  public content: string;
  public title: string;

  constructor(data) {
    this.content = data.content;
    this.title = data.title;
  }
}
