import {useState, useRef, useEffect, useReducer, createContext} from 'react';
import {TodoList} from "./Todolist.js";

export function Todo(props) {

    return (
        <>{props.deleteClick === false ?
        <div className="todo">

            <div className="title" id="titleId">Title: {props.title}</div><br />
            <div className="content2">Content: {props.content}</div><br />
            <div>Added {props.date}</div>
            <div>id: {props.id} KEY:{props.mkey}</div>
                        
            <button className="edit" onClick={props.edit}>Edit</button>
            <button className="delete" onClick={props.delete}>Delete</button>
        </div>
        :<></>
        }
</>
    )
}
