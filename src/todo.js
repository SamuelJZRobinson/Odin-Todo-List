export class Todo{
  constructor(index,desc,dueDate,priority){
    this.index=index;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.isChecked=false;
  }

  toggleCheck(){
    this.isChecked = !this.isChecked;
  }

  editTask(){
    
  }
}