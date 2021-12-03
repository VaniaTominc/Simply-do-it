import React from 'react'
import { ImBin2 } from 'react-icons/im'

const TasksList = (props) => {

  // console.log('[TASKSLIST COMPONENT PROPS >>>>]', props)

  // const date = new Date()
  // console.log('date >>>>', date)

  const date = () => {
    const d = new Date()
    const date = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    
    const dateStr = date + "/" + month + "/" + year
    return dateStr
  }

  return (
    <div className='task-list-container'>
      {/* TASKSLISTS TO BE DISPLAYED */}

      {props.tasks.length > 0 ? 
      
        <>

          <div className='date-container'>
            <p>{date()}</p>
          </div>

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
                  <button onClick={() => props.delete(id) } className='delete-btn'><ImBin2 className="delete-icon" /></button>
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