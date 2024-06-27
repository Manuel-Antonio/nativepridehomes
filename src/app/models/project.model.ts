import { Category } from './category.model';

export class Project {
  constructor(
    public name: string,
    public description: string,
    public img: string,
    public category: Category
  ) {}
}
