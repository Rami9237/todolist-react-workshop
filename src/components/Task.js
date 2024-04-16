import { faCheck, faEdit, faSave, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
export default function Task({ todo, deleteTask, toggleEditing,editTask,completeTask }) {
    // Could  be improved...
    const [descriptionEditor, setDescriptionEditor] = useState(todo.description);
    const cancelChanges = id => { setDescriptionEditor(todo.description); toggleEditing(id)}
    return (
        <div className="flex justify-between gap-10 bg-task p-3 mt-2 rounded-md items-center">
            <div>
                {!todo.isEditing ?
                    <p className="font-bold text-white break-all">{todo.description}</p> :
                    <input type="text" value={descriptionEditor} onChange={event => setDescriptionEditor(event.target.value)} autoFocus className="bg-[#141834] text-blue-400 outline-none" />}
            </div>
            {!todo.isEditing ?
                <div className="flex gap-3 ">
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faCheck} onClick={() => completeTask({ ...todo, isCompleted: true })} />
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faEdit} onClick={() => toggleEditing(todo.id)} />
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faTrash} onClick={() => deleteTask(todo.id)} />
                </div>
                :
                <div className="flex gap-3">
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faSave} onClick={() => editTask({ ...todo,description: descriptionEditor })} />
                    <FontAwesomeIcon className="text-white cursor-pointer" icon={faTimes} onClick={() => cancelChanges(todo.id)}/>
                </div>    
            }    
                
        </div>
    )
}
