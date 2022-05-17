import React from "react";
import styles from "./todo.module.css"
import TodoItem from "./TodoItem";
import {useState} from "react";
const Todo=()=>{
    const [value,setValue]=useState("")
    const [todos,setTodos]=useState([]);
    const onDelete=(id)=>{
        let newTodos=todos.filter((todo)=>todo.id!==id);
        setTodos(newTodos)
    }
    return (
        <div>
            Todo
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button
            onClick={()=>{
               setTodos([...todos,{id:Date.now(),value:value}]);
               setValue("");
            }}
            >Add</button>
            <div className={styles.todoList}>
                {todos.map((todo)=>(
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}
export default Todo;
