const addInput = document.querySelector('#add-task')

const addBtn = document.querySelector('#add-btn')
const delTaskBtn = document.querySelector('#del-btn')

const renameBtn = document.querySelector('.rename-task')
const updateBtn = document.querySelector('.update-task')
const delBtn = document.querySelector('.del-task')

const newTasks = document.querySelector('.new-tasks')

delTaskBtn.addEventListener('click', () => {
    addInput.value = ''
})


addBtn.addEventListener('click', (e) => {
    let todo = addInput.value
    todo = todo.trim()
    if (todo == '') {
        alert('No task is added ')
    } else {
        console.log(todo)
        addTodo(todo)
        addInput.value = ''
        updateTodo()
    }
})