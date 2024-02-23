
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const addTask = todo => setTodos([ ...todos, todo])
  const deleteTask = id => setTodos([...todos.filter(todo => (todo.id !== id))])
  const editTask = id => {
    setTodos([...todos.map(todo => todo.id === id ? todo.isEditing = { ...todo, isEditing: !todo.isEditing } : { ...todo, isEditing: false })]);
  }
  const changeDescription = description => setDescription(description);
  const commitEditTask = (id, newDescription) => {
    setTodos([...todos.map(todo => todo.id === id ? { ...todo, isEditing: false, description: newDescription } : todo)])
  }
    return (
    <div>
      <Navbar></Navbar>
      <div className="ctnr justify-center items-center flex">
        <TodoList
          todos={todos}
          allowNewTaskCreation={true}
          description={description}
          deleteTask={deleteTask}
          changeDescription={changeDescription}
          commitEditTask={commitEditTask}
          addTask={addTask}
          editTask={editTask} />
      </div>
    </div>
  );
}

export default App;
