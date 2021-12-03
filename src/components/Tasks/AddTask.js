import React, { useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

const AddTask = (props) => {

  // Receiving function from a parent, whatever we get is then passed as an argument to the function in parent component
  // console.log('[ADDTASK COMPONENT] >>>>', props)
  
  const [enteredTask, setEnteredTask] = useState('')

  // ! Handling on submit task
  const addTaskHandler = event => {
    event.preventDefault()
    props.onAddTask(enteredTask)
    setEnteredTask('')
  }

  // ! Handling input typing
  const taskChangeHandler = event => {
    // console.log('event.target.value >>>>', event.target.value)
    setEnteredTask(event.target.value)
    // console.log('enteredTask >>>>', enteredTask)
  }

  

  return (
    <div>
      {/* ADDTASK INPUT TO BE DISPLAYED */}

      <div>
        <form onSubmit={addTaskHandler}>
          <label htmlFor='task' className='task-label'>Task</label>
          <input 
            id='id'
            type='text'
            value={enteredTask}
            onChange={taskChangeHandler}
            maxLength='100'
            placeholder='Today I am working on ...'
          />
          <button 
            type='submit'
          >
            <BsPlusCircleFill size={24} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTask