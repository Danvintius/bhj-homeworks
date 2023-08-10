const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

button.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = input.value;
    if (inputValue.trim() != '') {
        tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
        <div class="task__title">
         ${inputValue}
       </div >
           <a href="#" class="task__remove">&times;</a>
     </div >`)
        const task = Array.from(document.querySelectorAll(".task__remove"));
        task[task.length - 1].addEventListener("click", () => {
           tasksList.removeChild(task[task.length - 1].closest(".task"));
        })
        input.value = '';
     }
})