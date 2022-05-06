import addToDo from "./components/add-Todo.js";

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoform = new addToDo();

        this.addTodoform.onClick((title, description) => this.addTodo(title, description));
    }

    setModel(model) {
        this.model = model;
    }

    render() {
        const todos = this.model.getTodos();
        for (const todo of todos) {
            this.createRow(todo);
        }
    }

    addTodo(title, description) {
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
    }

    togglecompleted(id) {
        this.model.toggleCompleted(id);
    }

    removeTodo(id) {
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    createRow(todo) {
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td class="text-center">
            
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.togglecompleted(todo.id);
        row.children[2].appendChild(checkbox);

        const removebtn = document.createElement('button');
        removebtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removebtn.innerHTML = '<i class="fa fa-trash"></i>';
        removebtn.onclick = () => this.removeTodo(todo.id);
        row.children[3].appendChild(removebtn);
    }
}