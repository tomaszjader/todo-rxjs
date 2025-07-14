import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../../services/todo.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, AsyncPipe],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  newTask = '';

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  add() {
    if (this.newTask.trim()) {
      this.todoService.addTodo(this.newTask);
      this.newTask = '';
    }
  }

  remove(id: number) {
    this.todoService.removeTodo(id);
  }
}