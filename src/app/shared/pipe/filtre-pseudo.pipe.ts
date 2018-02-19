import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({
  name: 'filtrePseudo'
})
export class FiltrePseudoPipe implements PipeTransform {

  transform(collegues: Collegue[] = [], args?: string): any {
    console.log(collegues);
    if(args.length == 0)
      return collegues;
    return collegues.filter(c => c.pseudo.includes(args[0]));
  }

}
