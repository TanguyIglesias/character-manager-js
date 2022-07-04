import { character } from './createDesk';
  
export function randomBG(){
    const bodyBackgroundRandom = ["/src/images/arene1.jpg","/src/images/arene2.jpg","/src/images/arene3.jpg","/src/images/arene4.jpg","/src/images/arene5.png", '/src/images/blackops.png', '/src/images/csgo.png', '/src/images/fantasy.jpg', '/src/images/halo.png', '/src/images/lol.png', '/src/images/minecraft.png', '/src/images/smash.png', '/src/images/smite.jpg', '/src/images/tft.png',"/src/images/eldenRing.jpg", "src/images/witcher3.jpg"]
    let imgRand = bodyBackgroundRandom[Math.floor(Math.random() * bodyBackgroundRandom.length)]
    const selectBody = document.querySelector('body')
    selectBody.setAttribute('style', `background-image: url("${imgRand}");`)
  
    character()
  }