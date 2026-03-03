# Architecture

## Layers

1. **Entry** – `index.ts` registers the root component with Expo.
2. **App** – `App.tsx` is the single screen: calls `useTodos()`, renders header + `TodoInput` + `TodoList`. No business logic; layout and wiring only.
3. **State** – `hooks/useTodos.ts` holds todo list and exposes `addTodo`, `toggleTodo`, `removeTodo`, and derived `doneCount`. Pure hook; no UI.
4. **UI** – `components/*` are presentational: they receive `items` and callbacks; no direct state except local input (e.g. `TodoInput` value).
5. **Shared** – `theme.ts`, `types.ts`, `lib/id.ts` used across app and tests.

## Extension points

- **Persistence:** Replace or wrap `useTodos` to read/write from AsyncStorage or a backend; keep the same interface (`todos`, `addTodo`, `toggleTodo`, `removeTodo`, `doneCount`).
- **Filtering (e.g. active/done):** Add a filter in `useTodos` (or a separate `useFilteredTodos(useTodos())`) and pass filtered list to `TodoList`.
- **Theming:** Swap `theme` (e.g. context or file) without changing component structure; components already use `theme.*` only.

## Conventions

- One feature per hook/component file.
- Components import from `./components` or `./theme`/`./types`/`./lib`; avoid deep relative paths.
- Test files sit under `__tests__/` with the same folder layout; use `testID` on interactive elements for stable selectors.
