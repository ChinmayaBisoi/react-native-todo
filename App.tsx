import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';
import { useTodos } from './hooks/useTodos';
import { TodoInput, TodoList } from './components';

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo, doneCount } = useTodos();

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
