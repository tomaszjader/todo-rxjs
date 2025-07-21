import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'selected-language';
  
  private currentLanguageSubject = new BehaviorSubject<string>('pl');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private availableLanguages: Language[] = [
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  private translations: { [lang: string]: Translations } = {
    pl: {
      'app.title': 'Lista Zadań',
      'todo.new.placeholder': 'Nowe zadanie',
      'todo.add': 'Dodaj',
      'todo.edit': 'Edytuj',
      'todo.delete': 'Usuń',
      'todo.save': 'Zapisz',
      'todo.cancel': 'Anuluj',
      'theme.light': 'Przełącz na tryb jasny',
      'theme.dark': 'Przełącz na tryb ciemny',
      'language.switch': 'Zmień język'
    },
    en: {
      'app.title': 'Todo List',
      'todo.new.placeholder': 'New task',
      'todo.add': 'Add',
      'todo.edit': 'Edit',
      'todo.delete': 'Delete',
      'todo.save': 'Save',
      'todo.cancel': 'Cancel',
      'theme.light': 'Switch to light mode',
      'theme.dark': 'Switch to dark mode',
      'language.switch': 'Change language'
    }
  };

  constructor() {
    this.loadLanguage();
  }

  private loadLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY);
    if (savedLanguage && this.translations[savedLanguage]) {
      this.currentLanguageSubject.next(savedLanguage);
    }
  }

  public setLanguage(languageCode: string): void {
    if (this.translations[languageCode]) {
      this.currentLanguageSubject.next(languageCode);
      localStorage.setItem(this.LANGUAGE_KEY, languageCode);
    }
  }

  public getAvailableLanguages(): Language[] {
    return this.availableLanguages;
  }

  public getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  public translate(key: string): string {
    const currentLang = this.getCurrentLanguage();
    return this.translations[currentLang]?.[key] || key;
  }

  public getTranslation(key: string): Observable<string> {
    return new Observable(observer => {
      const subscription = this.currentLanguage$.subscribe(lang => {
        observer.next(this.translations[lang]?.[key] || key);
      });
      return () => subscription.unsubscribe();
    });
  }
}