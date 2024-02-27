import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CompletedTodos from "./views/CompletedTodos";
import { getTodos } from "./services/TodosService";
function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route element={<Navbar />}>
      <Route path="/" element={<Home />} loader={() => getTodos(false)} />
      <Route path="/completed" element={<CompletedTodos/>}  loader={() => getTodos(true)}/>
      </Route>
  )
)
    return (
    <div>
       
        <RouterProvider router={router} />

    </div>
  );
}

export default App;
