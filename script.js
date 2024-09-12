function fetchTasks() {
    fetch('/api/v1/get-all-task')
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = ''; // Clear current list
            data.data.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.classList.add('task-item');
                taskItem.innerHTML = `
                    <div class="task-details">
                        <strong>${task.taskName}</strong>
                        <span>${task.taskDescription}</span>
                        <span>Date: ${task.taskDate}</span>
                        <span>Completed: ${task.isCompleted ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="task-actions">
                        <button class="update-btn" onclick="updateTask('${task._id}')">Update</button>
                        <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
                    </div>
                `;
                taskList.appendChild(taskItem);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Handle form submission
document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDate = document.getElementById('taskDate').value;

    // Send POST request to add a new task
    fetch('/api/v1/add-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskName, taskDescription, taskDate }),
    })
        .then(response => {
            if (response.ok) {
                alert('Task added successfully!');
                fetchTasks(); // Refresh the task list
                document.getElementById('task-form').reset(); // Clear the form
            } else {
                alert('Failed to add task');
            }
        })
        .catch(error => console.error('Error adding task:', error));
});

// Update task by ID
function updateTask(id) {
    const newTaskName = prompt('Enter new task name:');
    const newTaskDescription = prompt('Enter new task description:');
    const newTaskDate = prompt('Enter new task date (YYYY-MM-DD):');
    const isCompleted = confirm('Mark as completed?');

    if (newTaskName && newTaskDescription && newTaskDate) {
        fetch(`/api/v1/update-task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                taskName: newTaskName,
                taskDescription: newTaskDescription,
                taskDate: newTaskDate,
                isCompleted: isCompleted,
            }),
        })
            .then(response => {
                if (response.ok) {
                    alert('Task updated successfully!');
                    fetchTasks(); // Refresh the task list
                } else {
                    alert('Failed to update task');
                }
            })
            .catch(error => console.error('Error updating task:', error));
    }
}

// Delete task by ID
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        fetch(`/api/v1/delete-task/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    alert('Task deleted successfully!');
                    fetchTasks(); // Refresh the task list
                } else {
                    alert('Failed to delete task');
                }
            })
            .catch(error => console.error('Error deleting task:', error));
    }
}

// Fetch tasks on page load
fetchTasks();
