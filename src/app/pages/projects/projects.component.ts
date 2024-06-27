import { Component } from '@angular/core';
import { projects } from 'src/app/data/projects.data';
import { categories } from 'src/app/data/categories.data';
import { Project } from 'src/app/models/project.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = projects;
  categories = categories;
  filteredProjects: Project[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

  filterProjects(category: Category): void {
    this.filteredProjects = this.projects.filter(project => project.category.id === category.id);
  }

  resetFilter(): void {
    this.filteredProjects = this.projects;
  }
}
