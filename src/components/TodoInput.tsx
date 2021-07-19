import React, { useState, useCallback } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState("");

  const handleAddNewTask = useCallback(() => {
    if (task) {
      addTask(task);

      setTask("");
    }
  }, [task, addTask, setTask]);

  const handleChangeTask = useCallback(
    (text: string) => {
      setTask(text);
    },
    [setTask]
  );

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onSubmitEditing={() => handleAddNewTask()}
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#B2B2B2"
        onChangeText={handleChangeTask}
        selectionColor="#666666"
        style={styles.input}
        returnKeyType="send"
        value={task}
      />
      <TouchableOpacity
        onPress={() => handleAddNewTask()}
        testID="add-new-task-button"
        style={styles.addButton}
        activeOpacity={0.7}
      >
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: "#EBEBEB",
    color: "#666666",
  },
  addButton: {
    backgroundColor: "#FFF",
    height: 56,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
