import React from "react";
import { Provider } from "unstated";
import { CounterComponent } from "./components";

function App() {
  return (
    <Provider>
      <CounterComponent />
    </Provider>
  );
}

export default App;
