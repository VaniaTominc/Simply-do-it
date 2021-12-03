import React, { useState } from 'react'
import TasksList from './components/Tasks/TasksList'
import AddTask from './components/Tasks/AddTask'

const App = () => {

  const [tasksToDoList, setTasksToDoList] = useState([])

  // Add task function. We expect some information that needs to be passed inside.
  // Information is going to be uplifted from child to parent and then from parent to another child.
  const addTaskHandler = (item) => {
    setTasksToDoList((prevTasksList) => {
      return [
        ...prevTasksList,                 // Making sure the previous data inside of tasksToDoList does not get deleted
        {
          id: Math.random().toString(),   // Getting custom id, to distinguish items between when looping through the array.
          task: item
        }
      ]
    })
  }

  // Remove task


  // Localstorage

  return (
    <div className='app'>
      {/* Headings */}

      <div>
        <h1>TO-DO list</h1>
      </div>

      {/* AddTask component */}

      <AddTask onAddTask={addTaskHandler} />

      {/* TaskList component displayed */}

      <TasksList tasks={tasksToDoList} />

    </div>
  )
}

export default App
