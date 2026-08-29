import './style.css'

let todos = []

document.querySelector('#app').innerHTML = `
  <main class="todo-app">
    <header class="app-header">
      <div>
        <p class="eyebrow">Task Management</p>
        <h1>My Todo List</h1>
        <p class="subtitle">Stay organized and get things done.</p>
      </div>
    </header>

    <section class="todo-container" aria-label="Todo application">
      <form id="todo-form" class="todo-form">
        <label class="sr-only" for="todo-input">Add a new task</label>
        <input
          id="todo-input"
          type="text"
          placeholder="What needs to be done?"
          autocomplete="off"
          maxlength="120"
        />
        <button type="submit">Add Task</button>
      </form>

      <div class="todo-toolbar">
        <p id="task-count">0 tasks</p>

        <div class="filters" role="group" aria-label="Task filters">
          <button class="filter-btn active" data-filter="all" type="button">All</button>
          <button class="filter-btn" data-filter="active" type="button">Active</button>
          <button class="filter-btn" data-filter="completed" type="button">Completed</button>
        </div>
      </div>

      <ul id="todo-list" class="todo-list"></ul>

      <div id="empty-state" class="empty-state">
        <h2>No tasks yet</h2>
        <p>Add your first task to get started.</p>
      </div>
    </section>
  </main>
`

const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const taskCount = document.querySelector('#task-count')
const emptyState = document.querySelector('#empty-state')

function renderTodos() {
  todoList.innerHTML = ''

  todos.forEach((todo) => {
    const item = document.createElement('li')
    item.className = 'todo-item'

    item.innerHTML = `
      <span>${todo.title}</span>
    `

    todoList.appendChild(item)
  })

  taskCount.textContent = `${todos.length} ${todos.length === 1 ? 'task' : 'tasks'}`
  emptyState.hidden = todos.length > 0
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const title = todoInput.value.trim()

  if (!title) {
    todoInput.focus()
    return
  }

  todos.push({
    id: Date.now(),
    title,
    completed: false,
  })

  todoInput.value = ''
  todoInput.focus()

  renderTodos()
})

renderTodos()
