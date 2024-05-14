import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
