import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let color:string = "";
    let symbole:string = "";
    if(value < 0){
      color = "text-danger";
    }
    else if(value > 0){
      color = "text-success";
      symbole = "+";
    }
    return `<span class="${color}">${symbole}${value}</span>`;
  }

}
