import ToDoItem from './ToDoItem'


const ToDoList = (props) => {



     
     

    return <div>
        {props.todos.map(todo => <ToDoItem key={todo.id} id={todo.id} text={todo.text}/>)}

    </div>

}

export default ToDoList