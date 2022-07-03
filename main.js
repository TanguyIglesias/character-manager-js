import "./style.scss"
  

  const character = () => {
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



function randomBG(){
  const bodyBackgroundRandom = ["/src/images/arene1.jpg","/src/images/arene2.jpg","/src/images/arene3.jpg","/src/images/arene4.jpg","/src/images/arene5.png",'/src/images/arene6.jpg']
  let imgRand = bodyBackgroundRandom[Math.floor(Math.random() * bodyBackgroundRandom.length)]
  const selectBody = document.querySelector('body')
  selectBody.setAttribute('style', `background-image: url("${imgRand}");`)

  character()
}

function createFormAdd(){

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
    

randomBG()


document.querySelector('#createdCharacter').addEventListener('click', function(){
  removeTitleSelect()
  if(document.querySelector('.form')){
    document.querySelector('.form').remove()
    createFormAdd()
  }else{
    createFormAdd()
  }

});



function getInfos(){

  let url ='https://character-database.becode.xyz/characters'
  let infoName = document.querySelector('.charName').value
  let infoTitle = document.querySelector('.charTitle').value
  let infoDesc = document.querySelector('.charDesc').value
  let infoImg = document.querySelector('#output').src
  let dataImg = infoImg.replace('data:image/png;base64,', '').replace('data:image/jpeg;base64,', '');

  console.log(infoName)
  console.log(infoTitle)
  console.log(dataImg)

  let character ={
        description: infoDesc,
        image: dataImg,
        name: infoName,
        shortDescription: infoTitle
  }

  axios({
    method :"post",
    url: url,
    data: character
  })
  .then(function (response) {
    console.log(response);
    location.reload();
  })
.catch(function (error) {
    console.log(error);
  });

}

const viewImgFormat = () => {

  const output = document.getElementById('output');
  if (window.FileList && window.File && window.FileReader) {
      document.getElementById('charImg').addEventListener('change', event => {
          output.src = '';
          const file = event.target.files[0];
          if (!file.type) {
              return;
          }
          if (!file.type.match('image.*')) {
              return;
          }
          const reader = new FileReader();
          reader.addEventListener('load', event => {
              output.src = event.target.result;
          });
          reader.readAsDataURL(file);
      });
  }
};


function inputDelEditOne(){
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

function inputDelEditTwo(){
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

function submitEdit(id){
  let url ='https://character-database.becode.xyz/characters';
  fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
    .then(data => {
      console.log(data);
      document.querySelector(".charSubmitEdit").addEventListener("click", function(){
          let urlId = `https://character-database.becode.xyz/characters/${id}`
        
        const confirmation = confirm('Are you sur you want to edit this masterpiece ?')
          
          if(confirmation){
            let infoName = document.querySelector('.charName').value
            let infoTitle = document.querySelector('.charTitle').value
            let infoDesc = document.querySelector('.charDesc').value
            let infoImg = document.querySelector('#output').src
            let dataImg = infoImg.replace('data:image/png;base64,', '').replace('data:image/jpeg;base64,', '');
            
            let character ={
              description: infoDesc,
              image: dataImg,
              name: infoName,
              shortDescription: infoTitle
              }
              axios({
                method: "put",
                url: urlId,
                data: character
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
})
.catch(error => {
  console.log('Noob !', error);
});
}

function buttonDeleteOne(){
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

function buttonDeleteTwo(){
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

function displayDescOne(){
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

function displayDescTwo(){
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

function removeTitleSelect(){
    document.querySelector('.container-head-title').setAttribute('style', 'display: none')
}
