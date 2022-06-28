//import axios from "axios";

let base64Image = (image) => {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

var base64 = base64Image(document.getElementsByClassName("imageCharacter"))



let character = () => {
  axios.get('https://character-database.becode.xyz/characters').then((response) => {
  
    console.log(response)

    if (typeof response === "undefined") {
      let error = "<h2 class='error'>personnage inexistant</h2>";
      document.querySelector(".body__container-foot").innerHTML = error;
    }else{
      let displayCharacter = 
      `<img class="imageCharacter" src="${response.data[0].image}">`

      document.querySelector('.body__container-foot').innerHTML = displayCharacter
    }
    
  })
}



character()


//import{axiosCharacter} from '/src/script/character.js'
  //axiosCharacter()

const bodyBackgroundRandom = ["/src/images/arene1.jpg","/src/images/arene2.jpg","/src/images/arene3.jpg","/src/images/arene4.jpg","/src/images/arene5.png"]
let imgRand = bodyBackgroundRandom[Math.floor(Math.random() * bodyBackgroundRandom.length)]
const selectBody = document.querySelector('body')
selectBody.setAttribute('style', `background-image: url("${imgRand}");`)