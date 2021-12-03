import React from 'react'

const TasksList = (props) => {

  // console.log('[TASKSLIST COMPONENT PROPS >>>>]', props)

  return (
    <div>
      {/* TASKSLISTS TO BE DISPLAYED */}

      {props.tasks.length > 0 ? 
      
        <>
          {props.tasks && props.tasks.map(item => {
            const { id } = item
            // console.log('id >>>>', id)

            return (
              <div 
                key={item.id}
                className='task-card'
              >
                <div className='card-content'>
                  <div className='content task-content'>
                    {item.task}
                  </div>
                  <button onClick={() => props.delete(id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </>

        :

        ''              // Returning and empty string if there are no tasks


      }
    </div>
  )
}

export default TasksList