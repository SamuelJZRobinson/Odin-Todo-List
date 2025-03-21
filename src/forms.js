const FORM_OVERLAY = document.querySelector("#form-overlay");
const FORM_ADD_PROJECT = document.querySelector("form#add-project");
const BUT_OPEN_ADD_PROJECT = document.querySelector("#open-add-project");
const BUT_CLOSE_FORM = document.querySelector("#close-form");

BUT_OPEN_ADD_PROJECT.addEventListener("click", () => openAddProjectForm());
BUT_CLOSE_FORM.addEventListener("click", () => closeForms());

export function closeForms(){
  FORM_OVERLAY.style.display = "none";
  FORM_ADD_PROJECT.style.display = "none";
}

export function openAddProjectForm(){
  FORM_OVERLAY.style.display = "block";
  FORM_ADD_PROJECT.style.display = "block";
}

closeForms();