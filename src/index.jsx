import { render } from "react-dom"
import {createElement} from "react"
console.log("12333");

const element = createElement('div',{children:'1234'})
console.log(element);
render(element,document.getElementById('root'))