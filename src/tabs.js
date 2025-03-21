import { Project } from "./project";

export class Tabs{
  constructor(){
    this.projectList=[];
  }

  addProject(){
    let title = prompt("Project title:");
    this.projectList.push(new Project(title));

    console.log(this.projectList);
  }

  deleteProject(title){
    if (this.projectList.length > 0){
      this.projectList = this.projectList.filter(project => project.title !== title);
    }
    console.log(this.projectList);
  }
}