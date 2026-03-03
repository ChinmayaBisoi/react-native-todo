import React from 'react';
import {
  Box,
  HStack,
  Text,
  Checkbox,
  CheckboxIndicator,
  Pressable,
} from '@gluestack-ui/themed';
import type { Todo } from '../types';

type Props = {
  item: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export function TodoItem({ item, onToggle, onRemove }: Props) {
  return (
    <Box
      mb="$3"
      bg="$backgroundLight0"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$borderLight200"
      overflow="hidden"
    >
      <HStack
        alignItems="center"
        py="$3"
        px="$4"
        gap="$3"
      >
        <Checkbox
          value={item.id}
          testID={`todo-toggle-${item.id}`}
          size="md"
          isChecked={item.done}
          onChange={() => onToggle(item.id)}
          aria-label={item.title}
        >
          <CheckboxIndicator borderColor="$primary500">
            {item.done ? (
              <Text color="$primary500" size="sm" fontWeight="$bold">✓</Text>
            ) : null}
          </CheckboxIndicator>
        </Checkbox>
        <Text
          flex={1}
          size="md"
          color={item.done ? '$textLight500' : '$textLight900'}
          textDecorationLine={item.done ? 'line-through' : 'none'}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Pressable
          testID={`todo-remove-${item.id}`}
          onPress={() => onRemove(item.id)}
          hitSlop={12}
          p="$2"
          borderRadius="$full"
          $pressed={{ bg: '$backgroundLight100' }}
          $hover={{ bg: '$backgroundLight100' }}
        >
          <Text size="lg" color="$textLight400">
            ×
          </Text>
        </Pressable>
      </HStack>
    </Box>
  );
}
