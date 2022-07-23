import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const InputField = ({ setTodo, todo }) => (
  <TextInput
    onChangeText={setTodo}
    value={todo}
    placeholder="typing..."
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3
  }
});
