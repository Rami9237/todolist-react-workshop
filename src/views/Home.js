import { postTodo, putTodo, deleteTodo } from "../services/TodosService";
  import TodoList from "../components/TodoList";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Home() {
  const [todos, setTodos] = useState(useLoaderData());
  const [description, setDescription] = useState("");

  const deleteTask = id => {
    deleteTodo(id);
    setTodos([...todos.filter(todo => (todo.id !== id))])
  }
  const toggleEditing = id => {
    setTodos([...todos.map(todo => todo.id === id ? todo.isEditing = { ...todo, isEditing: !todo.isEditing } : { ...todo, isEditing: false })]);
  }
  const changeDescription = description => setDescription(description);
    const addTask = todo => {
      console.log(todo)
    postTodo(todo);
    setTodos([...todos, todo])
  }
  const editTask = (newTodo) => {  
    putTodo(newTodo);
    setTodos([...todos.map(todo => todo.id === newTodo.id ? { ...newTodo } : todo)])
  }
  const completeTask = newTodo => {
    setTodos([...todos.filter(todo => (todo.id !== newTodo.id))])
    putTodo(newTodo);

  }
    return (
        <div className="ctnr justify-center items-center flex bg-primary">
          <TodoList
            todos={todos}
            isCompletedRoute={false}
            description={description}
            deleteTask={deleteTask}
            changeDescription={changeDescription}
            editTask={editTask}
            addTask={addTask}
            completeTask={completeTask}
            toggleEditing={toggleEditing} />
        </div>
    )
}