import React from 'react'

const AddTask = (props) => {

  

  return (
    <div>
      {/* ADDTASK INPUT TO BE DISPLAYED */}

      <div>
        <form>
          <label></label>
          <input 
            id='id'
            type='text'
            value
            onChange
            maxLength='100'
            placeholder='Today I am working on ...'
          />
          <button 
            type='submit'
          >SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask