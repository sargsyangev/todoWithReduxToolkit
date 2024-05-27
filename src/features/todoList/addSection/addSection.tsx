import { KeyboardEvent } from "react";

type Props = {
  todoValue: string;
  updateValue: (props: React.ChangeEvent<HTMLInputElement>) => void;
  addTodoHandler: () => void;
  handleKeyboardAdd: (props: KeyboardEvent<HTMLInputElement>) => void;
};

const AddSection: React.FC<Props> = ({
  todoValue,
  updateValue,
  addTodoHandler,
  handleKeyboardAdd,
}: Props) => {
  return (
    <div className="flex justify-between items-center w-full h-[50px]">
      <input
        className="w-2/3 h-full p-1 bg-inherit dark:text-white text-2xl font-sans outline-none  border-b-2 dark:border-white border-slate-400"
        placeholder="write something for todo"
        value={todoValue}
        onChange={updateValue}
        onKeyDown={handleKeyboardAdd}
      />
      <button
        className={`w-1/5 h-full ${
          todoValue ? "bg-cyan-700" : "bg-slate-400"
        }  text-2xl text-white rounded-md`}
        onClick={addTodoHandler}
        disabled={!todoValue}
      >
        Add
      </button>
    </div>
  );
};
export default AddSection;
