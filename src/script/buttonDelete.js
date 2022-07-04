export function buttonDeleteOne(){
    let descOne = document.querySelector('.descOne')
    let descTwo = document.querySelector('.descTwo')
    document.querySelector(".vidageOne").addEventListener("click", function(){
      descOne.innerHTML=''
      document.querySelector('.versus').setAttribute('style', 'display: none;')
      descOne.setAttribute('style', 'background-color: none;')
      if(descOne.innerHTML == '' && descTwo.innerHTML == ''){
        document.querySelector('.container-head-title').setAttribute('style', 'display: initial')
      }
    })
    
    
  }
  
export function buttonDeleteTwo(){
    let descTwo = document.querySelector('.descTwo')
    let descOne = document.querySelector('.descOne')
    document.querySelector(".vidageTwo").addEventListener("click", function(){
      descTwo.innerHTML=''
      document.querySelector('.versus').setAttribute('style', 'display: none;')
      descTwo.setAttribute('style', 'background-color: none;')
      if(descOne.innerHTML == '' && descTwo.innerHTML == ''){
        document.querySelector('.container-head-title').setAttribute('style', 'display: initial')
      }
    })
    
  }