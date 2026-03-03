import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  GluestackUIProvider,
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Progress,
  ProgressFilledTrack,
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useTodos } from './hooks/useTodos';
import { TodoInput, TodoList } from './components';

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo, doneCount } = useTodos();
  const total = todos.length;
  const progressValue = total > 0 ? (doneCount / total) * 100 : 0;

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Box flex={1} bg="$backgroundLight50">
          <StatusBar style="dark" />
          <SafeAreaView style={{ flex: 1 }} edges={['top']}>
          <VStack flex={1} px="$5" pt="$6" pb="$2">
            {/* Hero header — editorial, progress-first */}
            <Box mb="$6">
              <Heading size="2xl" color="$textLight900" letterSpacing="$sm">
                Today
              </Heading>
              {total > 0 ? (
                <VStack mt="$4" gap="$2">
                  <HStack alignItems="center" justifyContent="space-between">
                    <Badge size="sm" variant="solid" action="muted" borderRadius="$full">
                      <BadgeText>
                        {doneCount} of {total} done
                      </BadgeText>
                    </Badge>
                    <Text size="xs" color="$textLight500">
                      {Math.round(progressValue)}%
                    </Text>
                  </HStack>
                  <Progress value={progressValue} size="sm" borderRadius="$full" bg="$backgroundLight200">
                    <ProgressFilledTrack bg="$primary500" borderRadius="$full" />
                  </Progress>
                </VStack>
              ) : (
                <Text size="sm" color="$textLight600" mt="$2">
                  Add tasks below. No rush.
                </Text>
              )}
            </Box>

            <TodoInput onSubmit={addTodo} />
            <TodoList
              items={todos}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          </VStack>
          </SafeAreaView>
        </Box>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
