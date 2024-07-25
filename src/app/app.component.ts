import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { IntreComponent } from './intre/intre.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

type edit_not = {
  yes:boolean,
  id:number
}
type list ={
  id: number;
  name: string;
  priority: string;
  date: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, IntreComponent, FormsModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TodoList';

  protected edit_not:edit_not={
    yes:true,
    id:-1
  };

  protected list:list[] = [];

  protected addition(work: string, prior: string, date1: string) {
    let x = this.list.find((value)=>{
      return value.date == date1 && value.priority==prior && value.name==work
    })
    if(!x){
      this.list.push({
        id: this.list.length + 1,
        name: work,
        priority: prior,
        date: date1,
      });
      console.log(this.list);
    }
  }
  protected remove(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
  protected prior_value = 'Least';
  protected tasks = "";
  protected date =""
  protected priority = ['Least', 'Medium', 'Heights'];
}
