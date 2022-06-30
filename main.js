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
            const img = document.createElement("div")
            const description = document.createElement("div")
            name.innerText = response.data[i].name
            subtitle.innerText = response.data[i].shortDescription
            img.innerHTML = `<img src="data:image/png;base64,${response.data[i].image}">`
            description.innerHTML = response.data[i].description

            if(document.querySelector('.descOne').childNodes.length !== 0){
              inputDelEditTwo()
              document.querySelector(".descTwo").appendChild(name)
              document.querySelector(".descTwo").appendChild(subtitle)
              document.querySelector(".descTwo").appendChild(img)
              document.querySelector(".descTwo").appendChild(description)
              

            }else{
              inputDelEditOne()
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
  createCharImg.setAttribute('id', 'charImg')

  const createSubmit = document.createElement('input')
  createSubmit.setAttribute('type', 'button')
  createSubmit.setAttribute('class', 'charSubmit')

  const divImg = document.createElement('div')
  const img = document.createElement('img')
  img.setAttribute('id','output')

  createForm.appendChild(createCharName)
  createForm.appendChild(createCharTitle)
  createForm.appendChild(createCharDesc)
  createForm.appendChild(createCharImg)
  createForm.appendChild(createSubmit)
  createForm.appendChild(divImg)
  divImg.appendChild(img)

  viewImgFormat();

  const buttonSubmit = document.querySelector('.charSubmit')

  buttonSubmit.addEventListener('click', getInfos)

 
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
  const inputEditOne = document.createElement('input')
  inputEditOne.setAttribute('id', 'editCharaOne')
  inputEditOne.setAttribute('value', 'edit')
  document.querySelector('.descOne').appendChild(inputEditOne)


  const inputDeleteOne = document.createElement('input')
  inputDeleteOne.setAttribute('id', 'deleteCharaOne')
  inputDeleteOne.setAttribute('value', 'Delete')
  document.querySelector('.descOne').appendChild(inputDeleteOne)
}

function inputDelEditTwo(){
  const inputEditTwo = document.createElement('input')
  inputEditTwo.setAttribute('id', 'editCharaTwo')
  inputEditTwo.setAttribute('value', 'edit')
  document.querySelector('.descTwo').appendChild(inputEditTwo)


  const inputDeleteTwo = document.createElement('input')
  inputDeleteTwo.setAttribute('id', 'deleteCharaTwo')
  inputDeleteTwo.setAttribute('value', 'Delete')
  document.querySelector('.descTwo').appendChild(inputDeleteTwo)
}
