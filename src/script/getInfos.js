export function getInfos(){

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