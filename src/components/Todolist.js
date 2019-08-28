import React from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

function TodoList({ todos }) {
  function renderTodoList() {
    return todos.allTodoes.map(todo => <li key={todo.id}>Itens{todo.text}</li>);
  }

  console.log(todos.allTodoes);

  return <>{todos.loading ? <p>carregando</p> : renderTodoList()}</>;
}

const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
    }
  }
`;

export default graphql(TodosQuery, { name: "todos" })(TodoList);
