import { Todo } from "./todo";

export class Project{
  constructor(title){
    this.title=title;
    this.todoList=[];
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