import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';

  list:{
    id: number,
    name: string
    priority: string,
    date: string
  }[]=[]

  addition(work:string,prior:string,date1:string)
  {
    const date= new Date(date1);
    console.log(work,prior,date1);
    this.list.push({id:this.list.length,name: work, priority:prior, date: date1})
    console.log(this.list);
  }
  }
