import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadThemeFromStorage();
  }

  get isDarkMode$(): Observable<boolean> {
    return this.isDarkModeSubject.asObservable();
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }

  private loadThemeFromStorage(): void {
    try {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme) {
        const isDark = savedTheme === 'dark';
        this.isDarkModeSubject.next(isDark);
        this.applyTheme(isDark);
      } else {
        // Sprawdź preferencje systemowe
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkModeSubject.next(prefersDark);
        this.applyTheme(prefersDark);
      }
    } catch (error) {
      console.error('Błąd podczas ładowania motywu z localStorage:', error);
    }
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newTheme);
    this.saveThemeToStorage(newTheme);
    this.applyTheme(newTheme);
  }

  private saveThemeToStorage(isDark: boolean): void {
    try {
      localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
    } catch (error) {
      console.error('Błąd podczas zapisywania motywu do localStorage:', error);
    }
  }

  private applyTheme(isDark: boolean): void {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}