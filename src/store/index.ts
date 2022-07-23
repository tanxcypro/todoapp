import { Container } from "unstated";

type CounterState = {
  todoArray: Array;
};

class Store extends Container<CounterState> {
  state = { todoArray: [] };

  setGlobalState = (key: string, value: any) => {
    this.setState({ [key]: value });
  };

  addItem = (item: string) =>
    this.setState({ todoArray: [...this.state.todoArray, item] });

  deleteItem = (index: number) => {
    this.state.todoArray.splice(index, 1);
    this.setState({ todoArray: this.state.todoArray });
  };
}

export default Store;
