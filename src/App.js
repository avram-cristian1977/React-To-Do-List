import ToDoList from './ToDoList'
import classes from './App.module.css';
import { useReducer, useRef } from 'react'
import ToDoContext from './store/todo-context'
import { v4 as uuid } from 'uuid'
import Chart from './Chart'


const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, {
        id: uuid(),
        text: action.payload,
        completed: false
      }]

    case "delete":
      return state.filter(todo => todo.id !== action.payload)

    case "complete": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }

        }

        return item
      })
    }


    default:
      return state
  }
}


function App() {

  const [state, dispatch] = useReducer(todoReducer, [])
  const inputRef = useRef()

  const submitHandler = (ev) => {
    ev.preventDefault()
    if (inputRef.current.value) {

      dispatch({ type: "add", payload: inputRef.current.value })
    }

    inputRef.current.value = ""

  }
  console.log("state length", state.length);
  console.log("state", state);
  const completedTasks = state.filter(todo => todo.completed === true)
  console.log({ completedTasks })

  let procentage;

  if (state.length > 0) {

    procentage = ((completedTasks.length / state.length) * 100).toFixed(0)
  }
  console.log({ procentage })
  return (
    <ToDoContext.Provider value={dispatch}>
      <div className={classes.todoElements}>
        <h2>A man's gotta do what a man's gotta do</h2>
        {procentage  && <Chart procentage={procentage} />}
        <div>
          <form onSubmit={submitHandler}>
            <label>Gotta do... </label>
          

            <input type="text" ref={inputRef} />
            <button className={classes.addBtn}> + </button>

          


          </form>

        </div>



        <ToDoList todos={state} />

      </div>
    </ToDoContext.Provider>
  );
}

export default App;
