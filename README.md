
# Bud User Management Application - Task

## Project Overview

This Angular-based enterprise application is designed with scalability, modularity, and maintainability in mind. The application uses **Nx Monorepo** for efficient library management, a custom reusable UI library for consistency, and modern Angular state management techniques such as **NgRx** or **SignalStore**. It demonstrates a production-ready architecture with a strong focus on clean code and Domain-Driven Design (DDD).

### Deployment

The app can be hosted on GitHub Pages or any other platform. Once deployed, it will be accessible via a specified URL.

---

## Key Features

- **Modular Architecture**: Organized into feature-based libraries for easy scalability and maintenance.
- **State Management**: Uses either **NgRx** or **SignalStore** for predictable state transitions.
- **Custom Components**: Includes reusable components consistent design and functionality.
- **Dynamic Forms**: Handles real-time validation and dynamic input fields for a better user experience.
- **Domain-Driven Design (DDD)**: Separates business logic into distinct modules, making it easier to adapt and extend.

---

## Architecture Overview

### Core
The core module contains shared services and utilities, including:
- **UserService**: Manages API requests and user data handling.
- Shared utilities for application-wide use.

### Features
Feature modules encapsulate domain-specific functionality, such as:
- **User Management**: Dynamic forms, user lists, and related components.

### UI Components
Reusable components are stored in the `shared/ui` library, ensuring consistency across the app:
- **InputComponent**: For text input and search functionality.
- **ButtonComponent**: Reusable buttons with customizable styles and sizes.
- **Card Component**: Displays user information in a visually appealing format.

### State Management
State is handled using:
- **NgRx**: Actions, reducers, and effects for handling complex state transitions.
- **SignalStore**: Angular signals for reactive state management and improved performance.

---

## Folder Structure

### Shared UI Components Library

Reusable components are organized in the `shared/ui` library:

```plaintext
shared/ui
│
└── lib
    └── components
        ├── button
        ├── input
        ├── card
```

### Features Library

#### **`users-signals`**
Focuses on lightweight state management using SignalStore.

```plaintext
users-signals
│
└── lib
    ├── components
    │   └── bud-admin-features-users-signal-home
    │       ├── bud-admin-features-users-signal-home.component.html
    │       ├── bud-admin-features-users-signal-home.component.scss
    │       ├── bud-admin-features-users-signal-home.component.spec.ts
    │       └── bud-admin-features-users-signal-home.component.ts
    ├── services
    │   └── user-signalStore
    │       ├── user-store.service.ts
    │       └── user-store.service.spec.ts
```

#### **`users-ngrx`**
Implements state management using NgRx.

```plaintext
users-ngrx
│
└── lib
    ├── components
    │   └── bud-admin-features-users-ngrx-form
    │       ├── bud-admin-features-users-ngrx-form.component.html
    │       ├── bud-admin-features-users-ngrx-form.component.scss
    │       ├── bud-admin-features-users-ngrx-form.component.spec.ts
    │       └── bud-admin-features-users-ngrx-form.component.ts
    ├── pages
    │   └── bud-admin-features-users-ngrx-home
    │       ├── bud-admin-features-users-ngrx-home.component.html
    │       ├── bud-admin-features-users-ngrx-home.component.scss
    │       ├── bud-admin-features-users-ngrx-home.component.spec.ts
    │       └── bud-admin-features-users-ngrx-home.component.ts
```

### State Management Library

State-related logic is implemented in the `domain/users` folder:

```plaintext
domain/users
│
└── lib
    └── +state
        ├── actions
        ├── effects
        ├── reducer
        ├── selectors
    └── services
```

---

## Tech Stack

- **Angular**: Frontend framework for the UI.
- **Nx**: Monorepo setup for efficient code organization.
- **RxJS**: Reactive programming for state and asynchronous operations.
- **TypeScript**: Primary development language.
- **DDD (Domain-Driven Design)**: For modular and scalable architecture.
- **NgRx**: For state management in complex scenarios.
- **SignalStore**: For lightweight and performant state management.
- **Storybook**: UI component development and documentation.
- **Jest**: For unit testing and ensuring robustness.

---

## Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the application:
    ```bash
    npm start
    ```


---

## Checklist

- [x] Modular Angular application.
- [x] Integrated state management with NgRx or SignalStore.
- [x] Reusable UI components in a shared library.
- [x] Applied DDD principles for maintainable architecture.
- [x] Dynamic forms with real-time validation.

---

## Next Steps

- **Design Tokens**: Introduce design tokens for consistent styling and easier theme management.
- **Global Error Handling**: Implement a global error handler to improve user experience.
- **Advanced Storybook Use**: Extend Storybook to test complex states and edge cases in components.

---
