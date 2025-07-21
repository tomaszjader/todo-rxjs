import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../../services/todo.service';
import { ThemeService } from '../../services/theme.service';
import { LanguageService, Language } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, AsyncPipe, TranslatePipe],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  isDarkMode$: Observable<boolean>;
  currentLanguage$: Observable<string>;
  availableLanguages: Language[];
  newTask = '';
  editingId: number | null = null;
  editingText = '';

  constructor(
    private todoService: TodoService,
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {
    this.todos$ = this.todoService.todos$;
    this.isDarkMode$ = this.themeService.isDarkMode$;
    this.currentLanguage$ = this.languageService.currentLanguage$;
    this.availableLanguages = this.languageService.getAvailableLanguages();
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

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  changeLanguage(languageCode: string) {
    this.languageService.setLanguage(languageCode);
  }
}