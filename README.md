# rntodo

Todo app built with Expo (React Native), TypeScript, and in-memory state.

## Stack

- **Expo** ~52
- **React Native** 0.76
- **TypeScript** 5.9
- **Jest** + `@testing-library/react-native` for tests

## Scripts

| Command   | Description              |
| --------- | ------------------------ |
| `npm start` | Start Expo dev server   |
| `npm run ios` | Run on iOS simulator  |
| `npm run android` | Run on Android emulator |
| `npm run web` | Run in browser         |
| `npm test` | Run Jest tests          |

## Project layout

- `App.tsx` — root UI, wires `useTodos` to `TodoInput` / `TodoList`
- `hooks/useTodos.ts` — todo state (add, toggle, remove, done count)
- `components/` — `TodoInput`, `TodoItem`, `TodoList`
- `theme.ts` — colors and spacing
- `lib/id.ts` — id generation
- `__tests__/` — unit tests for hooks, components, lib

## Prerequisites

- Node 18+
- iOS: Xcode + simulator (macOS)
- Android: Android Studio + emulator or device with USB debugging
- [Expo Go](https://expo.dev/go) optional for device testing

## Run locally

```bash
npm install
npm start
```

Then press `i` (iOS), `a` (Android), or `w` (web) in the terminal, or scan the QR code with Expo Go.
