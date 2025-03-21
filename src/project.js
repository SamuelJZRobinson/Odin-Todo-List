export class Project{
  constructor(title){
    this.title=title;
    this.taskList=[];
  }

  addTask(){
    const INDEX = this.taskList.length;
    this.taskList.push(new Task(INDEX,"b",Date,"high"));
    console.log(this.taskList);
  }

  deleteTask(index){
    if (this.taskList.length > 0){
      this.taskList.splice(index,1);
      console.log(this.taskList);
    }
  }
}