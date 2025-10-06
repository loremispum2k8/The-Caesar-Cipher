import {caesarCipher} from "./functions.js"

let messageInput = document.querySelector('#message')
let shiftValue = document.querySelector('#shift')
let codedMessageInput = document.querySelector('#codeMessage')
let codeBtn = document.querySelector('#codeBtn')
let deleteBtn = document.querySelector('#deleteBtn')

codeBtn.addEventListener('click',()=>{
    codedMessageInput.value = caesarCipher(messageInput.value,Number(shiftValue.value))
    messageInput.value = ''
})
deleteBtn.addEventListener("click",()=>{
    messageInput.value = ''
    codedMessageInput.value = ''
})