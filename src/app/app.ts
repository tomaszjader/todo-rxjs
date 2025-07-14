import { Component } from '@angular/core';
import { TodoComponent } from "./components/todo/todo.component";

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-rxjs-ng';
}
