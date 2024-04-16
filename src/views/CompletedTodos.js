import { useLoaderData } from "react-router-dom";
import TodoList from "../components/TodoList";
export default function CompletedTodos() {
  let todos = useLoaderData();

    return (
        <div className="ctnr justify-center items-center flex bg-primary">
          <TodoList
            todos={todos}
            isCompletedRoute={true}/>
        </div>
    )
}