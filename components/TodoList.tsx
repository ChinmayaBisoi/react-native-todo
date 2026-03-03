import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import type { Todo } from '../types';
import { TodoItem } from './TodoItem';

type Props = {
  items: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export function TodoList({ items, onToggle, onRemove }: Props) {
  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>No tasks yet</Text>
        <Text style={styles.emptySub}>Add one above to get started.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem item={item} onToggle={onToggle} onRemove={onRemove} />
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: theme.spacing.xxl,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  emptyTitle: {
    fontSize: theme.typography.bodySize,
    color: theme.colors.textMuted,
    letterSpacing: theme.typography.labelLetterSpacing,
    marginBottom: theme.spacing.xs,
  },
  emptySub: {
    fontSize: theme.typography.captionSize,
    color: theme.colors.textMuted,
    opacity: 0.7,
  },
});
