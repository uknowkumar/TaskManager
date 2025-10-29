import { Component, signal } from '@angular/core';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
// import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
   standalone: true,
   imports: [DataBinding], 
  
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
   title = signal('TaskManager');
   
}
