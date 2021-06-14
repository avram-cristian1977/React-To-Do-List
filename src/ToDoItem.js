import { useContext } from 'react'
import ToDoContext from '../src/store/todo-context'
import classes from './ToDoItem.module.css'
const ToDoItem = (props) => {

    const todoCTXdispatch = useContext(ToDoContext)

    return <>
    <div className={classes.wrapper}>
        <div className={classes['todo-item']}>
            
            <input type="checkbox" className={classes.checkbox} onChange={() => todoCTXdispatch({ type: "complete", payload: props.id })} />
            
            <div className={classes.text}>{props.text}</div>
            
            <button onClick={() => { todoCTXdispatch({ type: "delete", payload: props.id }) }}> - </button>
        </div>
        </div>
    </>
}

export default ToDoItem