// var h1 = document.createElement('h1') //element create by using js
// h1.innerHTML = 'Hello World form Js' //value of element
// document.body.appendChild(h1)

import arr from './app.js' //arr -> any file name for default export
import array from './app1.js'
import { name, surName } from './app.js' //name , surName -> exact name for named export
import { fileName } from './app1.js'
console.log(arr, array)
console.log(name)
console.log(name, surName)
console.log(fileName, name, arr)
