/**
 * Defines the attributes for a new 
 * blog post
 */
export class NewPost {
  constructor(
    public title: string,
    public description: string,
    public author: string,
    public content: string,
  ) {}
}
