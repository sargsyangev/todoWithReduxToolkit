import { Todo } from "../todoSlice";
import { MdDoneAll, MdEdit, MdDelete, MdSave, MdCancel } from "react-icons/md";

type Props = {
  todo: Todo;
  editTodoValue: string;
  doneTodoHandler: () => void;
  deleteTodoHandler: () => void;
  editTodoHandler: () => void;
  cancelEditTodoHandler: () => void;
  saveEditTodoHandler: () => void;
  updateEditValue: (props: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoItem: React.FC<Props> = ({
  todo,
  editTodoValue,
  doneTodoHandler,
  deleteTodoHandler,
  editTodoHandler,
  updateEditValue,
  cancelEditTodoHandler,
  saveEditTodoHandler,
}: Props) => {
  const { title, isEditable, isDone } = todo;
  console.log(isDone, "isdd");
  return (
    <div
      className={`flex justify-between items-center w-full h-[50px] mt-1 border-b-2 ${
        isDone ? "border-green-500" : " dark:border-white border-slate-500"
      } `}
    >
      <div className={`flex float-start items-center w-3/4 h-full p-1 text-2xl dark:text-white ${isDone && "line-through"} overflow-hidden`}>
        {isEditable ? (
          <input
            className="w-full h-full p-1 bg-inherit text-2xl font-sans outline-none"
            value={editTodoValue}
            onChange={updateEditValue}
            autoFocus
          />
        ) : (
          title
        )}
      </div>
      <div className="flex justify-between w-1/4 h-full">
        {!isEditable && (
          <button onClick={doneTodoHandler}>
            <MdDoneAll size="33px" color="green" />
          </button>
        )}
        {!isEditable && (
          <button onClick={deleteTodoHandler}>
            <MdDelete size="33px" color="red" />
          </button>
        )}
        {!isEditable && (
          <button disabled={isDone} onClick={editTodoHandler}>
            <MdEdit size="33px" color="yellow" />
          </button>
        )}
        {isEditable && (
          <button onClick={saveEditTodoHandler}>
            <MdSave size="33px" color="orange" />
          </button>
        )}
        {isEditable && (
          <button onClick={cancelEditTodoHandler}>
            <MdCancel size="33px" color="red" />
          </button>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
