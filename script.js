import {caesarCipher} from "./functions.js"

window.addEventListener('load',()=>{
    document.body.classList.add('showEverything')
})

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

decodeBtn.addEventListener('click',()=>{
    if(decodeShift.value < -99){
        decodeShift.value = -99
     }else if(decodeShift.value < 0){
        decodeShift.value = Math.ceil(decodeShift.value)
     }else if(decodeShift.value > 99){
        decodeShift.value = -99
     }else{
        decodeShift.value = -Math.floor(decodeShift.value)
     }
     decodeMessageReciever.value = ''
     decodeMessageReciever.value = caesarCipher(decodeMessageInput.value, Number(decodeShift.value))
})

deleteDecodeBtn.addEventListener('click',()=>{
    decodeMessageReciever.value = ''
    decodeMessageInput.value = ''
})


// INFO POP UP
let infoContainer = document.querySelector('.info-container')
let showInfo = document.querySelector('.info-icon')
let closeInfo = document.querySelector('.closeIcon')

showInfo.addEventListener('click',()=>{
    infoContainer.style.display = 'flex'
    infoContainer.classList.add('showInfo')
    infoContainer.classList.remove('hideInfo')
})
closeInfo.addEventListener('click',()=>{
    infoContainer.classList.remove('showInfo')
    infoContainer.classList.add('hideInfo')
    infoContainer.removeAttribute('style')
})











let showTMTextarea = document.querySelector('.showTMTextarea')
let hideTMTextarea = document.querySelector('.hideTMTextarea')
if(window.innerWidth < 1300){
    decodeMessageReciever = document.querySelector('.showTMTextarea')
    console.log('Tablet')
    hideTMTextarea.id = 'noid'
    showTMTextarea.id = 'decode-message-result' 
}else if(window.innerWidth > 1300){
    decodeMessageReciever = document.querySelector('.hideTMTextarea')
    console.log('PC')
    showTMTextarea.id = 'noid'
    hideTMTextarea.id = 'decode-message-result'         
}
window.addEventListener('resize',()=>{
    if(window.innerWidth < 1300){
    decodeMessageReciever = document.querySelector('.showTMTextarea')
    console.log('Tablet')
    hideTMTextarea.id = 'noid'
    showTMTextarea.id = 'decode-message-result' 
}else if(window.innerWidth > 1300){
    decodeMessageReciever = document.querySelector('.hideTMTextarea')
    console.log('PC')
    showTMTextarea.id = 'noid'
    hideTMTextarea.id = 'decode-message-result'         
}
})