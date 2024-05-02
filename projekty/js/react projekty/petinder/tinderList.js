import {useState, useRef, useEffect, useReducer} from 'react';
import cat from './img/cat.jpg';
import dog from './img/dog.jpg';
import bird from './img/bird.jpg';

export const List = [
            {
                key: 1,
                id: 1,
                choice: false,
                img: cat,
                name: "Ania",
                age: "20",
                description:""
            },
            {
                key: 2,
                id: 2,
                choice: false,
                img: dog,
                name: "Zosia",
                age: "23"
            },
            {
                key: 3,
                id: 3,
                choice: false,
                img: bird,
                name: "Kasia",
                age: "81" 
            }
        ]
