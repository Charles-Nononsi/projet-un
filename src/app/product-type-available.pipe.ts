import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTypeAvailable'
})
export class ProductTypeAvailablePipe implements PipeTransform {

 transform(type: string): string {

     let color: string;

     switch (type) {
       case 'disponible':
         color = 'red ';
         break;
       case 'non-dispo':
         color = 'green';
         break;

        }

     return 'chip ' ;


 }

}
