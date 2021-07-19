import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = useCallback(
    (newTaskTitle: string) => {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks((prevState) => [...prevState, data]);
    },
    [setTasks]
  );

  const handleToggleTaskDone = useCallback(
    (id: number) => {
      setTasks((prevState) => {
        const index = prevState.findIndex((item) => item.id === id);
        const arr = [...prevState];

        arr[index].done = !arr[index].done;

        return arr;
      });
    },
    [setTasks]
  );

  const handleRemoveTask = useCallback(
    (id: number) => {
      setTasks((prevState) => prevState.filter((item) => item.id !== id));
    },
    [setTasks]
  );

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />
      <TodoInput addTask={handleAddTask} />
      <TasksList
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        tasks={tasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    flex: 1,
  },
});
