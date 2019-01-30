import { Component, } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray:string[]=[];

  addTodo(value:any){
    if(value!=""){
      this.todoArray.push(value);
    }
    else{
      alert("Filed Required !!");
    }
  }
  deleteItem(todo:any){
    for(let i=0; i<=this.todoArray.length; i++){
      if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }
  // submit Form
  todoSubmit(value:any){
    if(value!==""){
   this.todoArray.push(value.todo)
    //this.todoForm.reset()
   }else{
     alert('Field required **')
   }
   
 }
}
