import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import { theme } from '../theme';

type Props = {
  onSubmit: (title: string) => void;
  placeholder?: string;
};

export function TodoInput({ onSubmit, placeholder = 'Add a task' }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrap}>
      <TextInput
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textMuted}
        style={styles.input}
        cursorColor={theme.colors.accent}
        selectionColor={theme.colors.accentDim}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.btn, !value.trim() && styles.btnDisabled]}
        disabled={!value.trim()}
        activeOpacity={0.8}
      >
        <Text style={styles.btnLabel}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
    backgroundColor: theme.colors.bg,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  btn: {
    height: 48,
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'center',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.md,
  },
  btnDisabled: {
    opacity: 0.4,
  },
  btnLabel: {
    fontSize: theme.typography.bodySize,
    fontWeight: '600',
    color: theme.colors.bg,
    letterSpacing: theme.typography.labelLetterSpacing,
  },
});
