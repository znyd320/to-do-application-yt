const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', () => {
    const task = taskInput.value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        // Clear the input field
        taskInput.value = '';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});
