export default class Model{
    constructor(){
        this.view = null;
        this.todos = [];
        this.currentId = 1;
    }

    setView(view){
        this.view = view;
    }

    save(){

    }

    getTodos(){
        return this.todos;
    }

    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
    }

    addTodo(title, description){
        const todo = {
            id: 0,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);

        return {...todo};
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index, 1);
    }
}