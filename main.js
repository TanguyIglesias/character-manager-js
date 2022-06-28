

let character = () => {
  axios.get('https://character-database.becode.xyz/characters').then(Response => {
    console.log(Response)
  })
}

character()

//import{axiosCharacter} from '/src/script/character.js'
  //axiosCharacter()

const bodyBackgroundRandom = ["/src/images/arene1.jpg","/src/images/arene2.jpg","/src/images/arene3.jpg","/src/images/arene4.jpg","/src/images/arene5.png"]
let imgRand = bodyBackgroundRandom[Math.floor(Math.random() * bodyBackgroundRandom.length)]
const selectBody = document.querySelector('body')
selectBody.setAttribute('style', `background-image: url("${imgRand}");`)