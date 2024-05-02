import {useState, useRef, useEffect, useReducer} from 'react';
import cat from './img/cat.jpg';

export function Profile(props) {
    return (
        <div>
            <img className="sub-item img" src= {props.img} /> <br />
            <div className="data">
                <div className="sub-item name">{props.name}</div>
                <div className="sub-item age">{props.age} y/o</div> 
            </div>           
        </div>
    )
}