import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';
import type { Todo } from './types';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function genId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((title: string) => {
    setTodos((prev) => [
      { id: genId(), title, done: false, createdAt: Date.now() },
      ...prev,
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Todo</Text>
          <Text style={styles.meta}>
            {doneCount} of {todos.length} done
          </Text>
        </View>
        <TodoInput onSubmit={addTodo} />
        <TodoList
          items={todos}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  safe: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: theme.typography.titleSize,
    fontWeight: '200',
    letterSpacing: theme.typography.titleLetterSpacing,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  meta: {
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    letterSpacing: theme.typography.labelLetterSpacing,
  },
});
