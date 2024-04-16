import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(props) {
    const addTask = description => {
        props.addTask({ id: uuidv4(), description,isEditing :false,isCompleted: false })
        props.changeDescription("");
    }
    return (
        <div className="bg-black p-12 rounded-lg bg-secondary stw">
            <h2 className="text-5xl text-data">{!props.isCompletedRoute ? 'My TodoList' : 'Completed Tasks'}</h2>
            {!props.isCompletedRoute && <div className="flex mt-5 items-center gap-5">
                 <div className="flex-1">
                    <input
                        className="rounded-md bg-primary text-data p-3 w-full"
                        onChange={event => { props.changeDescription(event.target.value) }}
                        type="text"
                        value={props.description}
                        placeholder="What do you have planned?" />
                </div>
               
                <div>
                    <FontAwesomeIcon className="text-4xl text-task cursor-pointer" icon={faCirclePlus} onClick={() => addTask(props.description)} />
                </div>

            </div>
                      }       
            <h4 className="text-2xl mt-16 text-data">Todos</h4>
            <div className="max-h-80 overflow-auto">
            {props.todos && props.todos.length > 0 && 
                    props.todos.map(todo => <Task key={todo.id} todo={todo} deleteTask={props.deleteTask} toggleEditing={props.toggleEditing} editTask={props.editTask} completeTask={props.completeTask} />)
            }
            </div>
        </div>
    )
}