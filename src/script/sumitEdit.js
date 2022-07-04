export function submitEdit(id){
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