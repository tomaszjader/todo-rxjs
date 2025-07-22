# TodoRxjsNg - Aplikacja Todo z RxJS i Angular

## 📝 Opis

TodoRxjsNg to aplikacja do zarządzania listą zadań (todo list) zbudowana przy użyciu Angular i RxJS. Projekt ten został stworzony jako praktyczne narzędzie do nauki reaktywnego programowania z wykorzystaniem biblioteki RxJS w środowisku Angular.

## ✨ Funkcje

- **Zarządzanie zadaniami**: dodawanie, edycja i usuwanie zadań
- **Wielojęzyczność**: obsługa języka polskiego i angielskiego
- **Zmiana motywu**: przełączanie między jasnym i ciemnym motywem
- **Lokalne przechowywanie**: zapisywanie zadań i ustawień w localStorage
- **Responsywny design**: dostosowanie do różnych rozmiarów ekranów

## 🌐 Wielojęzyczność

### Dostępne języki:
- 🇵🇱 **Polski** (domyślny)
- 🇺🇸 **English**

### Jak zmienić język:
1. W prawym górnym rogu aplikacji znajdziesz przełącznik języków
2. Kliknij na flagę i nazwę języka, który chcesz wybrać
3. Aplikacja natychmiast przełączy się na wybrany język
4. Wybór zostanie zapamiętany w przeglądarce

## 🎨 Motywy

Aplikacja oferuje dwa motywy:
- **Jasny** (domyślny)
- **Ciemny**

Przełącznik motywu znajduje się w prawym górnym rogu aplikacji. Wybrany motyw jest zapisywany w localStorage i przywracany przy następnym uruchomieniu.

## 🛠️ Technologie

- **Angular 20** - framework aplikacji
- **RxJS** - reaktywne programowanie
- **TypeScript** - język programowania
- **@angular/localize** - pakiet do internacjonalizacji
- **LocalStorage API** - przechowywanie danych w przeglądarce

## 🚀 Uruchomienie

### Wymagania
- Node.js (wersja 18 lub nowsza)
- npm (wersja 9 lub nowsza)

### Instalacja

```bash
# Klonowanie repozytorium (jeśli pobierasz z git)
# git clone <adres-repozytorium>

# Przejście do katalogu projektu
cd todo-rxjs-ng

# Instalacja zależności
npm install
```

### Uruchomienie aplikacji

```bash
# Uruchomienie serwera deweloperskiego
npm start
```

Aplikacja będzie dostępna pod adresem: http://localhost:4200

### Budowanie produkcyjne

```bash
# Budowanie aplikacji produkcyjnej
npm run build
```

Skompilowane pliki będą dostępne w katalogu `dist/`.

## 📁 Struktura projektu

- `src/app/components/` - komponenty aplikacji
- `src/app/services/` - serwisy (todo, język, motyw)
- `src/app/pipes/` - pipe do tłumaczeń

## 🧩 Architektura

Aplikacja wykorzystuje wzorzec reaktywny z RxJS:
- **BehaviorSubject** do przechowywania stanu
- **Observable** do subskrybowania zmian
- **Pipe** do transformacji danych

## 🤝 Wkład

Zachęcam do zgłaszania problemów i propozycji ulepszeń poprzez Issues oraz Pull Requests.

## 📄 Licencja

Ten projekt jest udostępniany na licencji MIT.