import { useEffect, useState } from "react";
import TodoList from "./features/todoList/todoList";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  const handleChengeTheme = (): void => setDark(!dark);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex justify-evenly w-full min-h-screen dark:bg-black bg-slate-100">
      <TodoList />
      <button className="w-20 h-20">
        {!dark ? (
          <IoIosMoon onClick={handleChengeTheme} size="50px" />
        ) : (
          <IoIosSunny onClick={handleChengeTheme} size="50px" color="yellow" />
        )}
      </button>
    </div>
  );
};

export default App;
