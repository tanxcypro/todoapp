import React, { Fragment } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export const TodoList = ({ store, todo, setTodo }) => {
  const editHandle = (index) => {
    const newArray = [...store.state.todoArray];
    const editItem = newArray.splice(index, 1);
    setTodo(editItem);
    store.setGlobalState("todoArray", newArray);
  };

  return (
    <Fragment>
      {store.state.todoArray.map((item, index) => (
        <View style={styles.nestedContainer} key={index}>
          <Text style={styles.text}>{item}</Text>

          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button
                title="edit"
                disabled={todo}
                onPress={() => editHandle(index)}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="delete"
                onPress={() => {
                  store.deleteItem(index);
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  nestedContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between"
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5
  },
  buttonGroup: {
    flexDirection: "row"
  }
});
