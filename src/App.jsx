import TodoForm from "./components/todo-from";

function App() {
  return (
    <div className="max-h-screen p-20 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-4xl font-bold">first App</h1>

      <div className="bg-gray-200 p-10 w-full rounded-lg">
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
