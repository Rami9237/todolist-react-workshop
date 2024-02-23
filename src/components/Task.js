import { faCheck, faEdit, faSave, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
export default function Task({ todo, deleteTask, editTask,commitEditTask }) {
    // Could  be improved...
    const [descriptionEditor, setDescriptionEditor] = useState(todo.description);
    const rollbackEditTask = id => { setDescriptionEditor(todo.description); editTask(id)}
    return (
        <div className="flex justify-between gap-10 bg-[#141834] p-3 mt-2 rounded-md items-center">
            <div>
                {!todo.isEditing ?
                    <p className="font-bold text-white break-all">{todo.description}</p> :
                    <input type="text" value={descriptionEditor} onChange={event => setDescriptionEditor(event.target.value)} autoFocus className="bg-[#141834] text-blue-400 outline-none" />}
            </div>
            {!todo.isEditing ?
                <div className="flex gap-3 ">
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faCheck} />
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faEdit} onClick={() => editTask(todo.id)} />
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faTrash} onClick={() => deleteTask(todo.id)} />
                </div>
                :
                <div className="flex gap-3">
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faSave} onClick={() => commitEditTask(todo.id,descriptionEditor)} />
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faTimes} onClick={() => rollbackEditTask(todo.id)}/>
                </div>    
            }    
                
        </div>
    )
}
