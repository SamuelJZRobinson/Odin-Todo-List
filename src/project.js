import { Todo } from "./todo";

const PROJECT_CONTAINER = document.querySelector("#projects-container");

export class ProjectManager{
  constructor(){
    this.projectList=[];
  }

  getProjects(){
    return this.projectList;
  }

  createProject(title){
    this.projectList.push(new Project(title));
    this.renderProjects();
    console.log(this.getProjects());
  }

  deleteProject(index){
    this.projectList = this.projectList.filter(project => project.index !== index);
    console.log(this.getProjects());
  }

  renderProjects(){
    PROJECT_CONTAINER.innerHTML = "";
  
    this.projectList.forEach(project => {
      const PROJECT_ITEM = document.createElement("div");
      PROJECT_ITEM.setAttribute("class","project-item");
  
      const TITLE = document.createElement("p");
      TITLE.textContent = project.title;
  
      const CONTROLS = document.createElement("div");
      const EDIT_BUT = document.createElement("span");
      EDIT_BUT.setAttribute("class","material-icons-outlined but");
      EDIT_BUT.textContent = "edit";
      EDIT_BUT.addEventListener("click", () => project.editProject(project.index));
      const DELETE_BUT = document.createElement("span");
      DELETE_BUT.setAttribute("class","material-icons-outlined but");
      DELETE_BUT.textContent ="delete"
      DELETE_BUT.addEventListener("click", () => project.deleteProject(project.index));
      CONTROLS.append(EDIT_BUT,DELETE_BUT);
  
      PROJECT_ITEM.append(TITLE,CONTROLS);
      PROJECT_CONTAINER.append(PROJECT_ITEM);
    });
  }
}

export class Project{
  constructor(title){
    this.index=projectManager.getProjects().length;
    this.title=title;
    this.todoList=[];
  }

  editProject(index){
    projectManager.renderProjects();
  }

  deleteProject(index){
    projectManager.deleteProject(index);
    projectManager.renderProjects();
  }

  addTodo(){
    const INDEX = this.todoList.length;
    this.todoList.push(new Todo(INDEX,"b",Date,"high"));
    console.log(this.todoList);
  }

  deleteTodo(index){
    if (this.todoList.length > 0){
      this.todoList.splice(index,1);
      console.log(this.todoList);
    }
  }
}

export let projectManager = new ProjectManager();
// projectManager.createProject();