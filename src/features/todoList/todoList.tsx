import { KeyboardEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  addTodo,
  cancelEditTodo,
  deleteTodo,
  doneTodo,
  editTodo,
  saveEditTodo,
  selectTodos,
} from "./todoSlice";
import AddSection from "./addSection/addSection";
import TodoItem from "./todoItem/todoItem";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  const [todoValue, setTodoValue] = useState<string>("");
  const [editTodoValue, setEditTodoValue] = useState<string>("");

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoValue(e.target.value);
  };
  const updateEditValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditTodoValue(e.target.value);
  };
  const addTodoHandler = (): void => {
    if (todoValue.trim()) {
      dispatch(
        addTodo({
          id: Math.random(),
          isEditable: false,
          title: todoValue,
          isDone: false,
        })
      );
      setTodoValue("");
    }
  };
  const doneTodoHandler = (id: number): void => {
    dispatch(doneTodo(id));
  };

  const handleKeyboardAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoValue.trim()) {
      dispatch(
        addTodo({
          id: Math.random(),
          isEditable: false,
          title: todoValue,
          isDone: false,
        })
      );
      setTodoValue("");
    }
  };

  const deleteTodoHandler = (id: number): void => {
    dispatch(deleteTodo(id));
  };
  const editTodoHandler = (id: number, todoTitle: string): void => {
    dispatch(editTodo(id));
    setEditTodoValue(todoTitle);
  };
  const cancelEditTodoHandler = (id: number): void => {
    dispatch(cancelEditTodo(id));
  };
  const saveEditTodoHandler = (id: number, editValue: string): void => {
    dispatch(saveEditTodo({id, editValue}));
  };

  console.log(todos, "todos");

  return (
    <div className="flex flex-col items-center w-1/3 h-full">
      <h1 className="text-4xl my-7 text-slate-400 dark:text-white select-none">TodoList</h1>
      <AddSection
        todoValue={todoValue}
        updateValue={updateValue}
        addTodoHandler={addTodoHandler}
        handleKeyboardAdd={handleKeyboardAdd}
      />
      <div className=" w-full h-auto">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodoValue={editTodoValue}
              doneTodoHandler={() => doneTodoHandler(todo.id)}
              deleteTodoHandler={() => deleteTodoHandler(todo.id)}
              editTodoHandler={() => editTodoHandler(todo.id, todo.title)}
              cancelEditTodoHandler={() => cancelEditTodoHandler(todo.id)}
              updateEditValue={updateEditValue}
              saveEditTodoHandler={() =>
                saveEditTodoHandler(todo.id, editTodoValue)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
