import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  HStack,
} from '@gluestack-ui/themed';

type Props = {
  onSubmit: (title: string) => void;
  placeholder?: string;
};

export function TodoInput({ onSubmit, placeholder = 'Add a task…' }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <Box
      bg="$backgroundLight0"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$borderLight200"
      px="$4"
      py="$3"
      mb="$4"
      softShadow="2"
    >
      <HStack gap="$3" alignItems="center">
        <Input flex={1} size="md" variant="outline" borderWidth={0} bg="$backgroundLight50" borderRadius="$lg">
          <InputField
            value={value}
            onChangeText={setValue}
            onSubmitEditing={handleSubmit}
            returnKeyType="done"
            placeholder={placeholder}
            placeholderTextColor="$textLight400"
          />
        </Input>
        <Button
          size="md"
          onPress={handleSubmit}
          isDisabled={!value.trim()}
          opacity={!value.trim() ? 0.5 : 1}
          borderRadius="$lg"
          bg="$primary500"
        >
          <ButtonText>Add</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
}
