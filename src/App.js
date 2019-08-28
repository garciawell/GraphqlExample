import React from "react";
import { ApolloProvider } from "react-apollo";

import apolloCliente from "./services/apollo";
import TodoList from "./components/Todolist";

function App() {
  return (
    <ApolloProvider client={apolloCliente}>
      {console.log("APOLLO", apolloCliente)}
      <TodoList />
    </ApolloProvider>
  );
}

export default App;
