import "./style.scss"
  

  let character = () => {
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
            const img = document.createElement("div")
            const description = document.createElement("div")
            name.innerText = response.data[i].name
            subtitle.innerText = response.data[i].shortDescription
            img.innerHTML = `<img src="data:image/png;base64,${response.data[i].image}">`
            description.innerHTML = response.data[i].description

            if(document.querySelector('.descOne').childNodes.length !== 0){
              document.querySelector(".descTwo").appendChild(name)
              document.querySelector(".descTwo").appendChild(subtitle)
              document.querySelector(".descTwo").appendChild(img)
              document.querySelector(".descTwo").appendChild(description)
            }else{
              
              document.querySelector(".descOne").appendChild(name)
              document.querySelector(".descOne").appendChild(subtitle)
              document.querySelector(".descOne").appendChild(img)
              document.querySelector(".descOne").appendChild(description)
            }

            
          }
          let selectImgs = document.querySelector(`.img${i}`)
          //selectImgs.addEventListener("click", createDesc)
          
            selectImgs.addEventListener('click', function(){
              if (document.querySelector('.descTwo').childNodes.length !== 0){
                console.log('pas de place')
              }else{
                createDesc()
              }
              });

            

        }

      }
      
    })
  }



function randomBG(){
  const bodyBackgroundRandom = ["/src/images/arene1.jpg","/src/images/arene2.jpg","/src/images/arene3.jpg","/src/images/arene4.jpg","/src/images/arene5.png"]
  let imgRand = bodyBackgroundRandom[Math.floor(Math.random() * bodyBackgroundRandom.length)]
  const selectBody = document.querySelector('body')
  selectBody.setAttribute('style', `background-image: url("${imgRand}");`)

  character()
}

function createFormAdd(){
  
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
  createCharImg.setAttribute('class', 'charImg')

  const createSubmit = document.createElement('input')
  createSubmit.setAttribute('type', 'button')
  createSubmit.setAttribute('class', 'charSubmit')

  createForm.appendChild(createCharName)
  createForm.appendChild(createCharTitle)
  createForm.appendChild(createCharDesc)
  createForm.appendChild(createCharImg)
  createForm.appendChild(createSubmit)

  const buttonSubmit = document.querySelector('.charSubmit')

  buttonSubmit.addEventListener('click', getInfos)
  let chara = {
    "name" : `${createCharName.value}`,
    "shortDescription":createCharTitle.innerText,
    "description":createCharDesc.value,
    "image": createCharImg.value
  }
  return chara
}
    

randomBG()


document.querySelector('#createdCharacter').addEventListener('click', function(){

  if(document.querySelector('.form')){
    document.querySelector('.form').remove()
    createFormAdd()
  }else{
    createFormAdd()
  }

});


function test(){
  console.log('isoké')
}

function getInfos(){

  let infoName = document.querySelector('.charName').value
  let infoTitle = document.querySelector('.charTitle').value
  let infoDesc = document.querySelector('.charDesc').value
  let infoImg = document.querySelector('.charImg').value

  console.log(infoName)
  console.log(infoTitle)
  console.log(infoDesc)
  // console.log(infoImg)
  console.log(createFormAdd())

}

