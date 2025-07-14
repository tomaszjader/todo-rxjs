import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  private idCounter = 1;

  get todos$(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(title: string) {
    const current = this.todosSubject.value;
    const newTodo: Todo = { id: this.idCounter++, title };
    this.todosSubject.next([...current, newTodo]);
  }

  removeTodo(id: number) {
    const updated = this.todosSubject.value.filter(todo => todo.id !== id);
    this.todosSubject.next(updated);
  }
}
