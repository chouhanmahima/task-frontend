// public/js/scripts.js

// Mock functions to simulate backend operations
const fetchTasks = () => {
    return [
        { taskName: 'Send Reminder Email', frequency: '0 9 * * *', status: 'Active' },
        { taskName: 'Clear Expired Data', frequency: '0 0 * * 0', status: 'Active' }
    ];
};

const fetchTaskLogs = () => {
    return [
        { taskName: 'Send Reminder Email', executedAt: '2024-09-10T09:00:00Z', status: 'Success', message: 'Email sent' },
        { taskName: 'Clear Expired Data', executedAt: '2024-09-10T00:00:00Z', status: 'Success', message: 'Expired data cleared' }
    ];
};

const addTask = (task) => {
    console.log('Task added:', task);
    // Here you would make an API call to your backend
    renderTasks();
};

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const taskFrequency = document.getElementById('taskFrequency').value;
    addTask({ taskName, taskFrequency, status: 'Active' });
    document.getElementById('taskForm').reset();
});

// Function to render tasks in the UI
const renderTasks = () => {
    const tasks = fetchTasks();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.taskName}</td>
            <td>${task.frequency}</td>
            <td>${task.status}</td>
        `;
        taskList.appendChild(row);
    });
};

// Function to render task logs in the UI
const renderTaskLogs = () => {
    const logs = fetchTaskLogs();
    const taskLogs = document.getElementById('taskLogs');
    taskLogs.innerHTML = '';
    logs.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.taskName}</td>
            <td>${new Date(log.executedAt).toLocaleString()}</td>
            <td>${log.status}</td>
            <td>${log.message}</td>
        `;
        taskLogs.appendChild(row);
    });
};

// Initial rendering
renderTasks();
renderTaskLogs();
