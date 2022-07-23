import React, { useState } from "react";
import { Subscribe } from "unstated";
import Store from "../store";
import { Button, StyleSheet, View, Text } from "react-native";
import { InputField } from "./inputField";
import { TodoList } from "./todoList";

export const CounterComponent = () => {
  const [todo, setTodo] = useState("");

  return (
    <Subscribe to={[Store]}>
      {(store) => (
        <View style={styles.container}>
          <Text style={styles.text}>Todo App</Text>
          <InputField setTodo={setTodo} todo={todo} />

          <TodoList todo={todo} store={store} setTodo={setTodo} />

          <View style={styles.buttonContainer}>
            <Button
              title="add todo"
              onPress={() => {
                store.addItem(todo);
                setTodo("");
              }}
            />
          </View>
        </View>
      )}
    </Subscribe>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 10
  },
  text: {
    color: "#888",
    fontWeight: "bold",
    fontSize: 20
  }
});
