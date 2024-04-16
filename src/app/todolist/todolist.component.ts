import { Component,NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  arrayIndex:number=0;
  showButton:boolean=true;
  taskTitle:string='';
  taskDescribtion:string='';
  taskDate:string='';
  taskArray=[{taskTitle :'Meeting',taskDescribtion:'important meeting witg GP team',taskDate:'2024-03-18'}]
  onSubmit(form : NgForm){
    console.log(form);
    this.taskArray.push({
      taskTitle: form.controls['taskTitle'].value,
      taskDescribtion: form.controls['taskDescribtion'].value,
      taskDate: form.controls['taskDate'].value
    })
  }
  onDelete(index:number){
    console.log(index);
    this.taskArray.splice(index,1);
  }
  onEdit(index:number,form:NgForm){
   this.showButton=false;
   const element=this.taskArray[index];
   this.taskTitle=element.taskTitle;
   this.taskDescribtion=element.taskDescribtion;
   this.taskDate=element.taskDate;
   this.arrayIndex=index;
  }
  showEditButton():boolean{
    return this.showButton;
  }
  onModify(){
    this.showButton=true;
    this.taskArray[this.arrayIndex].taskTitle=this.taskTitle;
    this.taskArray[this.arrayIndex].taskDescribtion=this.taskDescribtion;
    this.taskArray[this.arrayIndex].taskDate=this.taskDate;
  }
}
