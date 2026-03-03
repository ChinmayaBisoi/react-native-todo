# rntodo

Expo (React Native) todo app: add tasks, toggle done, remove. Single screen, in-memory state.

## Prerequisites

- Node 18+
- iOS Simulator / Android emulator or [Expo Go](https://expo.dev/go) on device

## Setup & run

```bash
npm install
npm start
```

Then press `i` (iOS), `a` (Android), or scan QR with Expo Go. For web: `npm run web`.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm start`   | Start Expo dev server    |
| `npm run ios` | Start with iOS           |
| `npm run android` | Start with Android  |
| `npm run web` | Run in browser           |
| `npm test`    | Run unit tests (Jest)    |

## Project structure

```
├── App.tsx              # Root UI; composes header + TodoInput + TodoList
├── index.ts              # Expo entry (registerRootComponent)
├── theme.ts              # Design tokens (colors, typography, spacing)
├── types.ts              # Todo type
├── lib/
│   └── id.ts             # genId() for unique todo ids
├── hooks/
│   └── useTodos.ts       # Todo state: add, toggle, remove, doneCount
├── components/
│   ├── index.ts          # Barrel export
│   ├── TodoInput.tsx     # Text input + Add button
│   ├── TodoItem.tsx      # Single row: checkbox, title, remove
│   └── TodoList.tsx      # FlatList or empty state
└── __tests__/            # Jest + React Native Testing Library
    ├── lib/
    ├── hooks/
    └── components/
```

- **Data flow:** `App` uses `useTodos()`; passes handlers and `todos` into presentational components.
- **Styling:** Single `theme` object; components use `StyleSheet` with `theme.*`.

## Testing

Tests live under `__tests__/`, mirroring `lib/`, `hooks/`, and `components/`. Run:

```bash
npm test
```

- **lib/id.test.ts** – `genId()` uniqueness and format.
- **hooks/useTodos.test.tsx** – add, toggle, remove, initial state via a small host component.
- **components/*.test.tsx** – render and interaction (submit, toggle, remove, empty state).

## Docs

- [Architecture](docs/architecture.md) – layers and extension points.
