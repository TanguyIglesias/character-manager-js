import { viewImgFormat } from './viewImgFormat.js';
import { getInfos } from './getInfos.js';

export function createFormAdd(){

    const createInputDeleteForm = document.createElement('input')
    createInputDeleteForm.setAttribute('class', 'deleteForm')
    createInputDeleteForm.setAttribute('type', 'button')
    createInputDeleteForm.setAttribute('value', 'X')
    
    const createForm = document.createElement('form')
    createForm.setAttribute('class', 'form')
    document.querySelector('.form-container').appendChild(createForm)
  
    const createCharName = document.createElement('input')
    createCharName.setAttribute('type', 'text')
    createCharName.setAttribute('placeholder', 'Name')
    createCharName.setAttribute('class', 'charName')
  
    const createCharTitle = document.createElement('input')
    createCharTitle.setAttribute('type', 'text')
    createCharTitle.setAttribute('placeholder', 'Short Description')
    createCharTitle.setAttribute('class', 'charTitle')
  
    const createCharDesc = document.createElement('input')
    createCharDesc.setAttribute('type', 'text')
    createCharDesc.setAttribute('placeholder', 'Description')
    createCharDesc.setAttribute('class', 'charDesc')
  
    const createCharImg = document.createElement('input')
    createCharImg.setAttribute('type', 'file')
    createCharImg.setAttribute('accept', 'image/png, image/jpeg')
    createCharImg.setAttribute('placeholder', 'Image')
    createCharImg.setAttribute('id', 'charImg')
  
    const createSubmit = document.createElement('input')
    createSubmit.setAttribute('type', 'button')
    createSubmit.setAttribute('class', 'charSubmit')
    createSubmit.setAttribute('value', 'Submit')
  
    const createSubmitEdit = document.createElement('input')
    createSubmitEdit.setAttribute('type', 'button')
    createSubmitEdit.setAttribute('class', 'charSubmitEdit')
    createSubmitEdit.setAttribute('style', 'display: none;')
  
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('id','output')
  
    createForm.appendChild(createInputDeleteForm)
    createForm.appendChild(createCharName)
    createForm.appendChild(createCharTitle)
    createForm.appendChild(createCharDesc)
    createForm.appendChild(createCharImg)
    createForm.appendChild(createSubmit)
    createForm.appendChild(createSubmitEdit)
    createForm.appendChild(divImg)
    divImg.appendChild(img)
  
    viewImgFormat();
  
    const buttonSubmit = document.querySelector('.charSubmit')
    const buttonDelForm = document.querySelector('.deleteForm')
    const selectForm = document.querySelector('.form')
    let descOne = document.querySelector('.descOne')
    let descTwo = document.querySelector('.descTwo')
  
    buttonSubmit.addEventListener('click', getInfos)
    buttonDelForm.addEventListener('click', function(){
      selectForm.remove()
      if(descOne.innerHTML == '' && descTwo.innerHTML == ''){
        document.querySelector('.container-head-title').setAttribute('style', 'display: initial')
      }
    })
  
  }