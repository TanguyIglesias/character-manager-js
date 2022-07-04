import {removeTitleSelect} from './removeTitle.js';
import {createFormAdd} from './createForm.js';

export function clickCreateForm(){
    document.querySelector('#createdCharacter').addEventListener('click', function(){
      removeTitleSelect()
      if(document.querySelector('.form')){
        document.querySelector('.form').remove()
        createFormAdd()
      }else{
        createFormAdd()
      }
  
    });
  }