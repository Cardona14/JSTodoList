document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1;

    function removeToDo(id) {
        document.getElementById(id).remove();
    }
    function addToDo() {
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'el titulo y la descripcion son requeridos';
            rerturn;
        }

        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
        `;
        const removebtn = document.createElement('button');
        removebtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removebtn.innerHTML = '<i class="fa fa-trash"></i>';
        removebtn.onclick = function (e) {
            removeToDo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removebtn);
    }

    btn.onclick = addToDo;
});

