export function displayDescOne(){
    let buttonDescOne = document.querySelector('.buttonDescOne')
    let articleOne = document.querySelector(`.descOne`)
    let description = articleOne.querySelector('.description')
    buttonDescOne.addEventListener('click', function(){
  
      if(buttonDescOne.value == '=>'){
        description.setAttribute('style', 'display: initial;')
        buttonDescOne.setAttribute('value', '<=')
      }else{
        description.setAttribute('style', 'display: none;')
        buttonDescOne.setAttribute('value', '=>')
      }
    })
  }
  
export function displayDescTwo(){
    let buttonDescTwo = document.querySelector(`.buttonDescTwo`)
    let articleTwo = document.querySelector(`.descTwo`)
    let description = articleTwo.querySelector(`.description`)
    buttonDescTwo.addEventListener('click', function(){
  
      if(buttonDescTwo.value == '=>'){
        description.setAttribute('style', 'display: initial;')
        buttonDescTwo.setAttribute('value', '<=')
      }else{
        description.setAttribute('style', 'display: none;')
        buttonDescTwo.setAttribute('value', '=>')
      }
    })
  }