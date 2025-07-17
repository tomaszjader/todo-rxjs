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
  editingId: number | null = null;
  editingText = '';

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

  startEdit(todo: Todo) {
    this.editingId = todo.id;
    this.editingText = todo.title;
  }

  saveEdit() {
    if (this.editingId !== null && this.editingText.trim()) {
      this.todoService.updateTodo(this.editingId, this.editingText);
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingId = null;
    this.editingText = '';
  }
}