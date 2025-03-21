import { projectManager, ProjectManager } from "./project";
import { Todo } from "./todo";

const FORM_OVERLAY = document.querySelector("#form-overlay");
const FORM_ADD_PROJECT = document.querySelector("form#add-project");
const BUT_CLOSE_FORM = document.querySelector("#close-form");
const BUT_OPEN_ADD_PROJECT = document.querySelector("#open-add-project");

BUT_OPEN_ADD_PROJECT.addEventListener("click", () => openAddProjectForm());
BUT_CLOSE_FORM.addEventListener("click", () => closeForms());
const FORM_LIST = [FORM_ADD_PROJECT];

FORM_ADD_PROJECT.addEventListener("submit", (e) =>{
  e.preventDefault();
  const TITLE = FORM_ADD_PROJECT.querySelector("#title").value.trim();
  projectManager.createProject(TITLE);
  closeForms();
})

export function closeForms(){
  FORM_OVERLAY.style.display = "none";
  FORM_LIST.forEach(form => {
    form.style.display = "none";
    form.reset();
  });
}

export function openAddProjectForm(){
  FORM_OVERLAY.style.display = "block";
  FORM_ADD_PROJECT.style.display = "block";
}

closeForms();