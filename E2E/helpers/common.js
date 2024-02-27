import axios from 'axios';
export async function cleanLocalDB() {
    try {
        // Fetch all todos
        const response = await axios.get(`http://localhost:3030/todos`);
        const todos = response.data;

        // Delete each todo
        await Promise.all(todos.map(todo => deleteTodo(todo.id)));

        console.log('Local database cleaned up successfully.');
    } catch (error) {
        console.error('Error cleaning local database:', error);
    }
}

async function deleteTodo(id) {
    try {
        await axios.delete(`http://localhost:3030/todos/${id}`);
    } catch (error) {
        console.error(`Error deleting todo with ID ${id}:`, error);
    }
}