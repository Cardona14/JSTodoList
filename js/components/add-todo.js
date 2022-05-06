export default class addTodo{
    constuctor(){
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback){
        this.btn.onClick = () => {
            if (title.value === '' || description.value === '') {
                // alert.innerText = 'El título y la descripción son requeridos';
                console.error('Incorrecto');
            } else{
                callback(this.title.value, this.description.value);
            }
        }
    }
}