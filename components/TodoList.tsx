import React from 'react';
import { FlatList, Box, Text, VStack, Heading } from '@gluestack-ui/themed';
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
      <VStack flex={1} justifyContent="center" alignItems="center" px="$8" py="$12">
        <Box
          w="$24"
          h="$24"
          borderRadius="$full"
          bg="$backgroundLight200"
          justifyContent="center"
          alignItems="center"
          mb="$4"
        >
          <Text size="4xl" color="$textLight400">
            ○
          </Text>
        </Box>
        <Heading size="sm" color="$textLight700" mb="$1">
          No tasks
        </Heading>
        <Text size="sm" color="$textLight500" textAlign="center">
          Add one above to get started
        </Text>
      </VStack>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem item={item} onToggle={onToggle} onRemove={onRemove} />
      )}
      contentContainerStyle={{
        paddingTop: 8,
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
