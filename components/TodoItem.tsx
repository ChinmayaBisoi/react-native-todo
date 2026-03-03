import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { theme } from '../theme';
import type { Todo } from '../types';

type Props = {
  item: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export function TodoItem({ item, onToggle, onRemove }: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        style={styles.checkWrap}
        activeOpacity={0.7}
      >
        <View style={[styles.check, item.done && styles.checkDone]}>
          {item.done && <View style={styles.checkDot} />}
        </View>
      </TouchableOpacity>
      <Text
        style={[styles.label, item.done && styles.labelDone]}
        numberOfLines={1}
      >
        {item.title}
      </Text>
      <Pressable
        onPress={() => onRemove(item.id)}
        style={({ pressed }) => [styles.remove, pressed && styles.removePressed]}
        hitSlop={12}
      >
        <Text style={styles.removeText}>×</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  checkWrap: {
    marginRight: theme.spacing.md,
  },
  check: {
    width: 22,
    height: 22,
    borderRadius: theme.radius.full,
    borderWidth: 2,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkDone: {
    borderColor: theme.colors.accent,
    backgroundColor: theme.colors.accentDim,
  },
  checkDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
  },
  label: {
    flex: 1,
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
    letterSpacing: 0.2,
  },
  labelDone: {
    color: theme.colors.done,
    textDecorationLine: 'line-through',
  },
  remove: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.full,
  },
  removePressed: {
    backgroundColor: theme.colors.danger + '30',
  },
  removeText: {
    fontSize: 22,
    color: theme.colors.textMuted,
    lineHeight: 24,
    fontWeight: '300',
  },
});
