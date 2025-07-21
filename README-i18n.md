# Todo App z obsługą wielojęzyczności (i18n)

## Opis

Aplikacja Todo z obsługą dwóch języków: polskiego i angielskiego. Aplikacja automatycznie zapisuje wybrany język w localStorage i przywraca go przy następnym uruchomieniu.

## Funkcje wielojęzyczności

### Dostępne języki:
- 🇵🇱 **Polski** (domyślny)
- 🇺🇸 **English**

### Jak zmienić język:
1. W prawym górnym rogu aplikacji znajdziesz przełącznik języków
2. Kliknij na flagę i nazwę języka, który chcesz wybrać
3. Aplikacja natychmiast przełączy się na wybrany język
4. Wybór zostanie zapamiętany w przeglądarce

### Przetłumaczone elementy:
- Tytuł aplikacji
- Placeholder pola wprowadzania nowego zadania
- Wszystkie przyciski (Dodaj, Edytuj, Usuń, Zapisz, Anuluj)
- Tooltips przełącznika motywów
- Tooltip przełącznika języków

## Struktura plików i18n

### Serwisy:
- `src/app/services/language.service.ts` - główny serwis zarządzający językami i tłumaczeniami

### Pipes:
- `src/app/pipes/translate.pipe.ts` - pipe do tłumaczenia tekstów w szablonach

### Tłumaczenia:
Wszystkie tłumaczenia są zdefiniowane w `LanguageService` w obiekcie `translations`:

```typescript
private translations: { [lang: string]: Translations } = {
  pl: {
    'app.title': 'Lista Zadań',
    'todo.new.placeholder': 'Nowe zadanie',
    // ... więcej tłumaczeń
  },
  en: {
    'app.title': 'Todo List',
    'todo.new.placeholder': 'New task',
    // ... więcej tłumaczeń
  }
};
```

## Jak dodać nowy język

1. **Dodaj język do listy dostępnych języków** w `LanguageService`:
```typescript
private availableLanguages: Language[] = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' } // nowy język
];
```

2. **Dodaj tłumaczenia** do obiektu `translations`:
```typescript
private translations: { [lang: string]: Translations } = {
  // ... istniejące języki
  de: {
    'app.title': 'Aufgabenliste',
    'todo.new.placeholder': 'Neue Aufgabe',
    'todo.add': 'Hinzufügen',
    // ... wszystkie klucze tłumaczeń
  }
};
```

## Użycie w szablonach

Aby użyć tłumaczenia w szablonie HTML:

```html
<!-- Prosty tekst -->
<h2>{{ 'app.title' | translate | async }}</h2>

<!-- Placeholder -->
<input [placeholder]="'todo.new.placeholder' | translate | async" />

<!-- Tooltip -->
<button [title]="'language.switch' | translate | async">
```

## Technologie

- **Angular 20** - framework aplikacji
- **@angular/localize** - pakiet do internacjonalizacji
- **RxJS** - reaktywne programowanie
- **TypeScript** - język programowania

## Uruchomienie

```bash
npm install
npm start
```

Aplikacja będzie dostępna pod adresem: http://localhost:4200

## Funkcje dodatkowe

- **Przełącznik motywów** - jasny/ciemny motyw
- **Responsywny design** - działa na różnych urządzeniach
- **Lokalne przechowywanie** - zadania i ustawienia są zapisywane w localStorage
- **Animacje** - płynne przejścia i efekty hover