export function inputDelEditOne(){
    const descOne= document.querySelector('.descOne')
    const inputEditOne = document.createElement('input')
    inputEditOne.setAttribute('id', 'editCharaOne')
    inputEditOne.setAttribute('value', 'Edit')
    inputEditOne.setAttribute('type', 'button')
    descOne.querySelector('#buttonContainer').appendChild(inputEditOne)
  
  
    const inputDeleteOne = document.createElement('input')
    inputDeleteOne.setAttribute('id', 'deleteCharaOne')
    inputDeleteOne.setAttribute('value', 'Delete')
    inputDeleteOne.setAttribute('type', 'button')
    descOne.querySelector('#buttonContainer').appendChild(inputDeleteOne)
  
    const buttonVidageOne = document.createElement('input')
    buttonVidageOne.setAttribute('class', 'vidageOne')
    buttonVidageOne.setAttribute('type', 'button')
    buttonVidageOne.setAttribute('value', 'X')
    descOne.querySelector('#buttonContainer').appendChild(buttonVidageOne)
  
  }
  
  export function inputDelEditTwo(){
    const descTwo= document.querySelector('.descTwo')
    const inputEditTwo = document.createElement('input')
    inputEditTwo.setAttribute('id', 'editCharaTwo')
    inputEditTwo.setAttribute('value', 'Edit')
    inputEditTwo.setAttribute('type', 'button')
    descTwo.querySelector('#buttonContainer').appendChild(inputEditTwo)
  
  
    const inputDeleteTwo = document.createElement('input')
    inputDeleteTwo.setAttribute('id', 'deleteCharaTwo')
    inputDeleteTwo.setAttribute('value', 'Delete')
    inputDeleteTwo.setAttribute('type', 'button')
    descTwo.querySelector('#buttonContainer').appendChild(inputDeleteTwo)
  
    const buttonVidageTwo = document.createElement('input')
    buttonVidageTwo.setAttribute('class', 'vidageTwo')
    buttonVidageTwo.setAttribute('type', 'button')
    buttonVidageTwo.setAttribute('value', 'X')
    descTwo.querySelector('#buttonContainer').appendChild(buttonVidageTwo)
    
  }