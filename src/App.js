import React, { useState } from 'react'
import TasksList from './components/Tasks/TasksList'
import AddTask from './components/Tasks/AddTask'

const App = () => {

  const [tasksToDoList, setTasksToDoList] = useState([])

  // ! Add task function. 
  // We expect some information that needs to be passed inside.
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

  // ! ---- Remove task
  // Function is going to be passed to the child and child will return id

  const removeTask = id => {
    const remove = tasksToDoList.filter(item => item.id !== id)
    // Making sure that tasksToDoList is then updated
    setTasksToDoList(remove)
  }

  // ! ---- Localstorage


  // !

  return (
    <div className='app'>
      {/* Headings */}

      <div>
        <h1>TO-DO list</h1>
      </div>

      {/* AddTask component */}

      <AddTask onAddTask={addTaskHandler} />

      {/* TaskList component displayed */}

      <TasksList tasks={tasksToDoList} delete={removeTask} />

    </div>
  )
}

export default App
