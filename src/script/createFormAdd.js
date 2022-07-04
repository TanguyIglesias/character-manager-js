import {removeTitleSelect} from './removeTitle';
import {createFormAdd} from './createForm';

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