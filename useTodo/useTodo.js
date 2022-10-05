import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

export const useTodo = () => {
  const initialState = [];
  const initializer = () => {
    console.log("inicializador corriendo");
    return JSON.parse(localStorage.getItem("todos") || []);
  };
  const [todos, dispatchTodo] = useReducer(
    todoReducer,
    initialState,
    initializer
  );

  useEffect(() => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("todos", todosStr);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };
  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=>!todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
