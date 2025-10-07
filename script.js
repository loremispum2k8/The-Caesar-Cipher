import {caesarCipher} from "./functions.js"

// let messageInput = document.querySelector('#message')
// let shiftValue = document.querySelector('#shift')
// let codedMessageInput = document.querySelector('#codeMessage')
// let codeBtn = document.querySelector('#codeBtn')
// let deleteBtn = document.querySelector('#deleteBtn')
// let decode = document.querySelector('#decode')


// decode.addEventListener('click',()=>{
//     if(shiftValue.value < 0){
//         shiftValue.value = Math.ceil(shiftValue.value)
//     }else{
//         shiftValue.value = -Math.floor(shiftValue.value)
//     }
//     messageInput.value= caesarCipher(codedMessageInput.value,Number(shiftValue.value))
//     codedMessageInput.value = ''
// })



// CODING MESSAGE 
let codeShift = document.querySelector('#code-shift')
let codeBtn = document.querySelector('.codify')
let deleteCodeBtn = document.querySelector('.code-delete')
let codeMessageInput = document.querySelector('#code-message-input')
let codeMessageReciever = document.querySelector('#code-message-result')

codeBtn.addEventListener('click',()=>{
    codeShift.value = Math.floor(Math.abs(codeShift.value))
    if(codeShift.value > 99){
        codeShift.value = 99
    }
    codeMessageReciever.value = ''
    codeMessageReciever.value = caesarCipher(codeMessageInput.value,Number(codeShift.value))
})

deleteCodeBtn.addEventListener('click',()=>{
    codeMessageReciever.value = ''
    codeMessageInput.value = ''
})


// DECODING MESSAGE
let decodeShift = document.querySelector('#decode-shift')
let decodeBtn = document.querySelector('.decodify')
let deleteDecodeBtn = document.querySelector('.decode-delete')
let decodeMessageInput = document.querySelector('#decode-message-input')
let decodeMessageReciever = document.querySelector('#decode-message-result')