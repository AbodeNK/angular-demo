import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value:any): any {
    if(!value) return null;
  
    let wortArray = value.split(' ');
    var word=[
      'up',
      'down',
      'the',
      'of'
    ]
    for( var i=0; i<wortArray.length;i++){
  //  if ( i ==0 && word[i] ){
    // wortArray[i] = wortArray[i].substring(1,wortArray[i].length >=2?wortArray[i].length-1:wortArray[i].length);
    // wortArray[i]= wortArray[i].slice(0,-1);
    //wortArray[i]= wortArray[i].substring(0.1).toLowerCase();
      
    // } 

    // var worttArray = wortArray[i].charAt(0);
     // wortArray[i] = worttArray + wortArray[i].charAt(wortArray[i].length-1);

    }
    return wortArray.join(' ');

}
}
