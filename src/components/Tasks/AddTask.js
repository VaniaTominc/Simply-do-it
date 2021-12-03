import React, { useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Error from '../UI/Error'

const AddTask = (props) => {

  // Receiving function from a parent, whatever we get is then passed as an argument to the function in parent component
  // console.log('[ADDTASK COMPONENT] >>>>', props)
  
  const [enteredTask, setEnteredTask] = useState('')
  const [error, setError] = useState()

  // ! Handling on submit task
  const addTaskHandler = event => {
    event.preventDefault()
    if (enteredTask.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid text (non-empty values).',
      })
      return
    }
    props.onAddTask(enteredTask)
    setEnteredTask('')
  }

  // ! Handling input typing
  const taskChangeHandler = event => {
    // console.log('event.target.value >>>>', event.target.value)
    setEnteredTask(event.target.value)
    // console.log('enteredTask >>>>', enteredTask)
  }

  // ! Error handler
  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>

      {/* ERROR MESSAGE DISPLAYED */}

      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      {/* ADDTASK INPUT TO BE DISPLAYED */}

      <div className='input-border'>
        <form onSubmit={addTaskHandler}>
          <div className='input-content'>
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
              className='add-btn'
            >
              <BsPlusCircleFill size={24} className='add-icon'/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask