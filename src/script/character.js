const axios = require(['axios']);

export let axiosCharacter = () => axios.get('https://character-database.becode.xyz/character')
                                        .then(function (response) {
                                            
                                            console.log(response);
                                        })

