import React from 'react'

const Error = (props) => {

  console.log('[ERROR] props >>>', props)

  return (
    <div className='error-container'>
      <div className='backdrop' onClick={props.onConfirm} />

      <div className='modal-container'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content error-content'>
          <p className='error-message'>{props.message}</p>
        </div>
        <footer className='actions'>
          <button onClick={props.onConfirm} className='modal-button'>Okay</button>
        </footer>
      </div>

    </div>
  )
}

export default Error