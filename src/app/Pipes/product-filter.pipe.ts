import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    //let add = (a, b) => a + b;
    //let add = function(a: number, b: number): number{return (a + b)};

    filterBy = filterBy ? filterBy.toLowerCase() : null;
    const result: IProduct[] = filterBy ? value.filter(
      (prod: IProduct) => (prod.productName.toLowerCase().indexOf(filterBy) !== -1)
    ) : value;
    return result;
  }

}
