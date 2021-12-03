import React, { useState } from 'react'
import TasksList from './components/Tasks/TasksList'
import AddTask from './components/Tasks/AddTask'

const App = () => {

  const [tasksToDoList, setTasksToDoList] = useState()

  // Add task


  // Remove task


  // Localstorage

  return (
    <div className='app'>
      {/* Headings */}

      <div>
        <h1>TO-DO list</h1>
      </div>

      {/* AddTask component */}

      <AddTask />

      {/* TaskList component displayed */}

      <TasksList />

    </div>
  )
}

export default App
