# TodoRxjsNg - Todo App with RxJS and Angular

## 📝 Description

TodoRxjsNg is a task management application (todo list) built using Angular and RxJS. This project was created as a practical tool for learning reactive programming using the RxJS library in the Angular environment.

## ✨ Features

- **Task management**: adding, editing, and deleting tasks
- **Multilingual support**: Polish and English languages
- **Theme switching**: toggle between light and dark themes
- **Local storage**: saving tasks and settings in localStorage
- **Responsive design**: adaptation to different screen sizes

## 🌐 Multilingual Support

### Available languages:
- 🇵🇱 **Polish** (default)
- 🇺🇸 **English**

### How to change the language:
1. In the top right corner of the application, you'll find a language switcher
2. Click on the flag and name of the language you want to select
3. The application will immediately switch to the selected language
4. Your choice will be remembered in the browser

## 🎨 Themes

The application offers two themes:
- **Light** (default)
- **Dark**

The theme toggle is located in the top right corner of the application. The selected theme is saved in localStorage and restored on the next launch.

## 🛠️ Technologies

- **Angular 20** - application framework
- **RxJS** - reactive programming
- **TypeScript** - programming language
- **@angular/localize** - internationalization package
- **LocalStorage API** - browser data storage

## 🚀 Getting Started

### Requirements
- Node.js (version 18 or newer)
- npm (version 9 or newer)

### Installation

```bash
# Clone the repository (if downloading from git)
# git clone <repository-address>

# Navigate to the project directory
cd todo-rxjs-ng

# Install dependencies
npm install
```

### Running the application

```bash
# Start the development server
npm start
```

The application will be available at: http://localhost:4200

### Production build

```bash
# Build the production application
npm run build
```

Compiled files will be available in the `dist/` directory.

## 📁 Project Structure

- `src/app/components/` - application components
- `src/app/services/` - services (todo, language, theme)
- `src/app/pipes/` - translation pipe

## 🧩 Architecture

The application uses the reactive pattern with RxJS:
- **BehaviorSubject** for state storage
- **Observable** for subscribing to changes
- **Pipe** for data transformation

## 🤝 Contribution

I encourage reporting issues and suggesting improvements through Issues and Pull Requests.

## 📄 License

This project is available under the MIT license.