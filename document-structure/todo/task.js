const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

button.onclick = function() {
    if (input.value != '') {
        let element = document.createElement('div');
        tasksList.insertAdjacentHTML("beforeEnd", "<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>");
        const taskTitle = document.querySelectorAll('.task__title');
        taskTitle.textContent = input.value;
    }
}