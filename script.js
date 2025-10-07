import {caesarCipher} from "./functions.js"

// let messageInput = document.querySelector('#message')
// let shiftValue = document.querySelector('#shift')
// let codedMessageInput = document.querySelector('#codeMessage')
// let codeBtn = document.querySelector('#codeBtn')
// let deleteBtn = document.querySelector('#deleteBtn')
// let decode = document.querySelector('#decode')

// codeBtn.addEventListener('click',()=>{
//     shiftValue.value = Math.floor(Math.abs(shiftValue.value))
//     codedMessageInput.value = caesarCipher(messageInput.value,Number(shiftValue.value))
//     messageInput.value = ''
// })
// deleteBtn.addEventListener("click",()=>{
//     messageInput.value = ''
//     codedMessageInput.value = ''
// })
// decode.addEventListener('click',()=>{
//     if(shiftValue.value < 0){
//         shiftValue.value = Math.ceil(shiftValue.value)
//     }else{
//         shiftValue.value = -Math.floor(shiftValue.value)
//     }
//     messageInput.value= caesarCipher(codedMessageInput.value,Number(shiftValue.value))
//     codedMessageInput.value = ''
// })

