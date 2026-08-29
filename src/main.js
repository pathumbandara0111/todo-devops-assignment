import './style.css'

const STORAGE_KEY = 'todo-devops-assignment-todos'

let todos = loadTodos()
let currentFilter = 'all'

function loadTodos() {
  try {
    const savedTodos = localStorage.getItem(STORAGE_KEY)
    return savedTodos ? JSON.parse(savedTodos) : []
  } catch {
    return []
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

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
const filterButtons = document.querySelectorAll('.filter-btn')

function renderTodos() {
  todoList.innerHTML = ''

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'active') {
      return !todo.completed
    }

    if (currentFilter === 'completed') {
      return todo.completed
    }

    return true
  })

  filteredTodos.forEach((todo) => {
    const item = document.createElement('li')
    item.className = `todo-item${todo.completed ? ' completed' : ''}`

    item.innerHTML = `
      <label class="todo-content">
        <input
          type="checkbox"
          class="todo-checkbox"
          data-id="${todo.id}"
          ${todo.completed ? 'checked' : ''}
        />
        <span class="todo-title"></span>
      </label>

      <button
        class="delete-btn"
        type="button"
        data-id="${todo.id}"
      >
        Delete
      </button>
    `

    item.querySelector('.todo-title').textContent = todo.title

    item.querySelector('.delete-btn').setAttribute(
      'aria-label',
      `Delete ${todo.title}`
    )

    todoList.appendChild(item)
  })

  const visibleCount = filteredTodos.length
  taskCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'task' : 'tasks'
    }`

  emptyState.hidden = visibleCount > 0
}

todoList.addEventListener('change', (event) => {
  if (!event.target.classList.contains('todo-checkbox')) {
    return
  }

  const todoId = Number(event.target.dataset.id)

  todos = todos.map((todo) =>
    todo.id === todoId
      ? { ...todo, completed: event.target.checked }
      : todo
  )

  saveTodos()
  renderTodos()
})

todoList.addEventListener('click', (event) => {
  if (!event.target.classList.contains('delete-btn')) {
    return
  }

  const todoId = Number(event.target.dataset.id)

  todos = todos.filter((todo) => todo.id !== todoId)

  saveTodos()
  renderTodos()
})

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

  saveTodos()

  todoInput.value = ''
  todoInput.focus()

  renderTodos()
})

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle(
        'active',
        filterButton === button
      )
    })

    renderTodos()
  })
})

renderTodos()
