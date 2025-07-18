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
  private readonly STORAGE_KEY = 'todos';
  private readonly ID_COUNTER_KEY = 'todoIdCounter';
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  private idCounter = 1;

  constructor() {
    this.loadFromStorage();
  }

  get todos$(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  private loadFromStorage(): void {
    try {
      const savedTodos = localStorage.getItem(this.STORAGE_KEY);
      const savedIdCounter = localStorage.getItem(this.ID_COUNTER_KEY);
      
      if (savedTodos) {
        const todos: Todo[] = JSON.parse(savedTodos);
        this.todosSubject.next(todos);
      }
      
      if (savedIdCounter) {
        this.idCounter = parseInt(savedIdCounter, 10);
      }
    } catch (error) {
      console.error('Błąd podczas ładowania zadań z localStorage:', error);
    }
  }

  private saveToStorage(): void {
    try {
      const todos = this.todosSubject.value;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
      localStorage.setItem(this.ID_COUNTER_KEY, this.idCounter.toString());
    } catch (error) {
      console.error('Błąd podczas zapisywania zadań do localStorage:', error);
    }
  }

  addTodo(title: string) {
    const current = this.todosSubject.value;
    const newTodo: Todo = { id: this.idCounter++, title };
    this.todosSubject.next([...current, newTodo]);
    this.saveToStorage();
  }

  removeTodo(id: number) {
    const updated = this.todosSubject.value.filter(todo => todo.id !== id);
    this.todosSubject.next(updated);
    this.saveToStorage();
  }

  updateTodo(id: number, title: string) {
    const current = this.todosSubject.value;
    const updated = current.map(todo => 
      todo.id === id ? { ...todo, title } : todo
    );
    this.todosSubject.next(updated);
    this.saveToStorage();
  }

  clearAll() {
    this.todosSubject.next([]);
    this.idCounter = 1;
    this.saveToStorage();
  }
}
