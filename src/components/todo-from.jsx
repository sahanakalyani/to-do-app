import react from 'react'
const TodoForm = () => {
  return(
    <form className= "flex flex-col justify-center items-center gap-6">
      <input
      type="text"
      placeholder="Type your task..."
      className="px-4 py1.5 rounded-5m border border-gray-400 w-full max-w5-1 bg-gray-50"
    />
    <button type="submit" className="px-6 py-2 bg-green-400 rounded-5m">Add task</button>
    </form>
  )
}
export default TodoForm


  

