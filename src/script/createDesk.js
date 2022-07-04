import {removeTitleSelect} from './removeTitle'
import { inputDelEditOne, inputDelEditTwo } from './editChar';
import { displayDescOne, displayDescTwo } from './displayDesk';
import { buttonDeleteOne, buttonDeleteTwo } from './buttonDelete';
import { submitEdit } from './sumitEdit';
import { createFormAdd } from './createForm';

export const character = () => {
    axios.get('https://character-database.becode.xyz/characters').then((response) => {
    
      if (typeof response === "undefined") {
        let error = "<h2 class='error'>personnage inexistant</h2>";
        document.querySelector(".body__container-foot").innerHTML = error;
      }else{
        for (let i=0; i<response.data.length;i++ ){
        
          const createImg = document.createElement('img')
          createImg.setAttribute('class', `imageCharacter img${i}`)
          createImg.setAttribute('id', `image[${i}]`)
          createImg.setAttribute('src', `data:image/png;base64,${response.data[i].image}`)
          document.querySelector(".body__container-foot").appendChild(createImg)

          const createDesc=()=>{
            const name = document.createElement("h2")
            const subtitle = document.createElement("h4")
            const buttonDescOne = document.createElement('input')
            const buttonContainer = document.createElement('div')
            const nameContainer = document.createElement('div')
            const descImgContainer = document.createElement('div')
            const description = document.createElement("div")
            const imgID = response.data[i].id
        
            name.innerText = response.data[i].name
            subtitle.innerText = response.data[i].shortDescription
            descImgContainer.innerHTML += `<img src="data:image/png;base64,${response.data[i].image}">`
            description.innerHTML = response.data[i].description
            buttonDescOne.setAttribute('type', 'button')
            buttonDescOne.setAttribute('class', 'buttonDescOne')
            buttonDescOne.setAttribute('value', '=>')
            description.setAttribute('style', 'display: none;')
            description.setAttribute('class', 'description')
            const buttonDescTwo = document.createElement('input')
            buttonDescTwo.setAttribute('type', 'button')
            buttonDescTwo.setAttribute('class', 'buttonDescTwo')
            buttonDescTwo.setAttribute('value', '=>')
            buttonContainer.setAttribute('id', 'buttonContainer')
            nameContainer.setAttribute('id', 'nameContainer')
            descImgContainer.setAttribute('id', 'descImgContainer')
        
            if(document.querySelector('.descOne').childNodes.length !== 0){
        
              const descTwo=document.querySelector(".descTwo")
        
              removeTitleSelect()
        
              descTwo.setAttribute('style', 'background-color: rgb(0, 0, 0, 0.5);')
        
              document.querySelector(".descTwo").appendChild(buttonContainer)
              inputDelEditTwo()
              document.querySelector(".descTwo").appendChild(nameContainer)
              descTwo.querySelector("#nameContainer").appendChild(name)
              descTwo.querySelector("#nameContainer").appendChild(subtitle)
              document.querySelector(".descTwo").appendChild(descImgContainer)
              descTwo.querySelector("#descImgContainer").appendChild(buttonDescTwo)
              descTwo.querySelector("#descImgContainer").appendChild(description)
        
              document.querySelector('.versus').setAttribute('style', 'display: flex;')
        
              displayDescTwo()
        
              document.querySelector("#deleteCharaTwo").addEventListener("click", function(){
        
                let url = `https://character-database.becode.xyz/characters/${imgID}`
                const confirmation = confirm('Are you sur you want to delete this masterpiece ?')
        
                if(confirmation){
                  axios({
                    method: "delete",
                    url: url,
                    data: response.data[i]
                  })
                  .then(function (response) {
                    console.log(response);
                    location.reload()
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }
              })
              buttonDeleteOne()
        
              document.querySelector("#editCharaTwo").addEventListener("click", function(){
                let url = `https://character-database.becode.xyz/characters/${imgID}`
                if(document.querySelector('.form')){
                  document.querySelector('.form').remove()
                  createFormAdd()
                  document.querySelector('.charSubmit').setAttribute('style', 'display: none;')
                  document.querySelector('.charSubmitEdit').setAttribute('style', 'display: initial;')
        
                  let infoName = document.querySelector('.charName')
                  let infoTitle = document.querySelector('.charTitle')
                  let infoDesc = document.querySelector('.charDesc')
                  let infoImg = document.querySelector('#output').src
        
                  infoName.value = response.data[i].name
                  infoTitle.value = response.data[i].shortDescription
                  infoDesc.value = response.data[i].description
                  infoImg.file = response.data[i].image
                }else{
                  createFormAdd()
                  document.querySelector('.charSubmit').setAttribute('style', 'display: none;')
                  document.querySelector('.charSubmitEdit').setAttribute('style', 'display: initial;')
                 
                  
                  let infoName = document.querySelector('.charName')
                  let infoTitle = document.querySelector('.charTitle')
                  let infoDesc = document.querySelector('.charDesc')
                  let infoImg = document.querySelector('#output')
                  let charaId = response.data[i].id
        
                  infoName.value = response.data[i].name
                  infoTitle.value = response.data[i].shortDescription
                  infoDesc.value = response.data[i].description
                  infoImg.src = `data:image/png;base64,${response.data[i].image}`
                  submitEdit(charaId)
        
                }
                
              })
        
              buttonDeleteTwo()
        
            }else{
        
              const descOne=document.querySelector(".descOne")
        
              removeTitleSelect()
        
              descOne.setAttribute('style', 'background-color: rgb(0, 0, 0, 0.5);')
        
              document.querySelector(".descOne").appendChild(buttonContainer)
              inputDelEditOne()
              document.querySelector(".descOne").appendChild(nameContainer)
              document.querySelector("#nameContainer").appendChild(name)
              document.querySelector("#nameContainer").appendChild(subtitle)
              document.querySelector(".descOne").appendChild(descImgContainer)
              descOne.querySelector("#descImgContainer").appendChild(buttonDescOne)
              descOne.querySelector("#descImgContainer").appendChild(description)
        
              
              displayDescOne()
        
              document.querySelector("#deleteCharaOne").addEventListener("click", function(){
        
                let url = `https://character-database.becode.xyz/characters/${imgID}`
                const confirmation = confirm('Are you sur you want to delete this masterpiece ?')
        
                if(confirmation){
                  axios({
                    method: "delete",
                    url: url,
                    data: response.data[i]
                  })
                  .then(function (response) {
                    console.log(response);
                    location.reload()
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }
              })              
              
              document.querySelector("#editCharaOne").addEventListener("click", function(){
                let url = `https://character-database.becode.xyz/characters/${imgID}`
                if(document.querySelector('.form')){
                  document.querySelector('.form').remove()
                  createFormAdd()
                  document.querySelector('.charSubmit').setAttribute('style', 'display: none;')
                  document.querySelector('.charSubmitEdit').setAttribute('style', 'display: initial;')
                  
                  
                  let infoName = document.querySelector('.charName')
                  let infoTitle = document.querySelector('.charTitle')
                  let infoDesc = document.querySelector('.charDesc')
                  let infoImg = document.querySelector('#output').src
                  
                  infoName.value = response.data[i].name
                  infoTitle.value = response.data[i].shortDescription
                  infoDesc.value = response.data[i].description
                  infoImg.file = response.data[i].image
                }else{
                  createFormAdd()
                  document.querySelector('.charSubmit').setAttribute('style', 'display: none;')
                  document.querySelector('.charSubmitEdit').setAttribute('style', 'display: initial;')
                  
                  let infoName = document.querySelector('.charName')
                  let infoTitle = document.querySelector('.charTitle')
                  let infoDesc = document.querySelector('.charDesc')
                  let infoImg = document.querySelector('#output')
                  
                  let charaId = response.data[i].id
                  infoName.value = response.data[i].name
                  infoTitle.value = response.data[i].shortDescription
                  infoDesc.value = response.data[i].description
                  infoImg.src = `data:image/png;base64,${response.data[i].image}`
                  submitEdit(charaId)
                  
                  
                }
              })
              
              buttonDeleteOne()
              
            }
            
          }
          
          let selectImgs = document.querySelector(`.img${i}`)
          
            selectImgs.addEventListener('click', function(){
              if (document.querySelector('.descTwo').childNodes.length !== 0 && document.querySelector('.descOne').childNodes.length !== 0){
                console.log('pas de place')
              }else{
                
                if(document.querySelector('.descTwo').childNodes.length !== 0 && document.querySelector('.descOne').childNodes.length == 0){
                  document.querySelector('.versus').setAttribute('style', 'display: flex;')
                }
                createDesc()
              }
              });
              
        }
        
      }
      
    })
  }

 