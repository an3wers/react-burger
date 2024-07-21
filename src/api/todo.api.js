import { v4 } from "uuid";

export const createTodo = (title) => {
  return {
    title,
    completed: false,
    id: v4(),
  };
};

export const createTodoOnServer = async (title) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(createTodo(title)),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) throw new Error("Could not create todo");

  return response.json();
};
