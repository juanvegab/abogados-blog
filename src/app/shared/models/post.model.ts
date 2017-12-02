export class PostModel {
  public id: string;
  public content: string;
  public title: string;

  constructor(data) {
    this.id = data.id;
    this.content = data.content;
    this.title = data.title;
  }
}
