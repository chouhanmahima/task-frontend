# Frontend Task Scheduler UI

This is the frontend for the Task Scheduler application, built with HTML, CSS, and JavaScript. It provides a user interface to interact with the backend API for managing tasks such as adding, updating, deleting, and viewing scheduled tasks.

## Features

- **Add New Task**: Form to create a new task with a name, description, and date.
- **Task List**: Displays all tasks with their details and status.
- **Update Task**: Update the details of existing tasks.
- **Delete Task**: Remove tasks from the list.
- **Task Logs**: View history of task executions (fetched from the backend).

## Getting Started

### Prerequisites

- A backend server running at `https://task-frontend-theta.vercel.app/` (or your configured backend URL).
- A modern web browser.

### Installation

No installation is required for the frontend as it's a static HTML, CSS, and JavaScript setup.

### Usage

1. **Run the Backend**: Ensure the backend server is running on the expected URL.
   #### POST: https://task-backend-6a2p.onrender.com/api/v1/add-task
   #### GET: https://task-backend-6a2p.onrender.com/api/v1/get-all-task
   
   #### UPDATE: https://task-backend-6a2p.onrender.com/api/v1/update-task/01

   #### DELETE: https://task-backend-6a2p.onrender.com/api/v1/delete-task/66e31364b8acbd8bdc184435

3. **Serve the Frontend**:
   - If you are serving through the backend, simply navigate to `https://task-frontend-theta.vercel.app/`.
   
4. **Interact with the UI**:
   - Use the provided forms and buttons to interact with the task scheduler.

### Environment Variables

None required. Ensure your backend is correctly configured to handle requests from the frontend.

### Notes

- The frontend communicates with the backend via Fetch API calls.
- All operations (add, update, delete) are handled by making requests to the backend APIs.

## License

This project is licensed under the MIT License.
