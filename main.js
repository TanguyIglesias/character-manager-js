import "./style.scss"
  

  let character = () => {
    axios.get('https://character-database.becode.xyz/characters').then((response) => {

      if (typeof response === "undefined") {
        let error = "<h2 class='error'>personnage inexistant</h2>";
        document.querySelector(".body__container-foot").innerHTML = error;
      }else{
        for (let i=0; i<response.data.length;i++ ){
        
          const createImg = document.createElement('img')
          createImg.setAttribute('class', 'imageCharacter')
          createImg.setAttribute('id', `image[${i}]`)
          createImg.setAttribute('src', `data:image/png;base64,${response.data[i].image}`)
          document.querySelector(".body__container-foot").appendChild(createImg)

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

function test(){
  console.log('isoké');
}

randomBG()


document.querySelector('#createdCharacter').addEventListener('click', test);