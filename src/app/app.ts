import { Component, signal } from '@angular/core';
import { User } from './user/user';
// import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
   standalone: true,
   imports: [User], 
  
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
   title = signal('TaskManager');
   
}
