import axios from 'axios'
// GET
// Get todos depending on status
const getTodos = async isCompleted => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todos?isCompleted=${isCompleted}`)
    return data;
}
// POST
const postTodo = async todo => {
    await axios.post(`${process.env.REACT_APP_API_URL}/todos`, { ...todo, isEditing: false,isCompleted: false })
}
// PUT
// Change the description
const putTodo = async (todo) => {
    await axios
        .put(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`,todo)
        .catch(err => console.log(err) )
}
// Complete the todo
// DELETE
const deleteTodo = async id => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`)
}
export {
    getTodos,
    postTodo,
    putTodo,
    deleteTodo
}
