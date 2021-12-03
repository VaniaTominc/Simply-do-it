export const getLocalStorage = () => {
  // Retrieving from local storage
  let taskList = localStorage.getItem('list')

  // Checking if there is anything inside local storage.
  // In any case it appears as an initial state of 'tasksToDoList' state.
  if (taskList) {
    return (taskList = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}