import TodoList from "./features/todoList/todoList";

const App: React.FC = () => {
  return (
    <div className="flex justify-center w-full min-h-screen bg-slate-100">
      <TodoList />
    </div>
  );
};

export default App;
