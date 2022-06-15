import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tittelcas'
})
export class TittelcasPipe implements PipeTransform {

  transform(value:String): any {
    if(!value) return null;
  
    let wordArray = value.split(' ');
    for( var i =0; i<wordArray.length;i++){
      if(i>0 && this.prepo(wordArray[i]) )
      wordArray[i]= wordArray[i].toLowerCase();
      else
        wordArray[i] = this.ubcas(wordArray[i]);
      

    }
   return wordArray.join(' ');

  }
   private ubcas(word:string):string{
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
   }

  private prepo(word:string): boolean{
    let prepo = [
      'of',
      'the',
      'up',
      'down',
      'abdulaa'

    ];
    return  prepo.includes(word.toLowerCase())

  }

}
