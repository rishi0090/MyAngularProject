import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg>18000)
      return "CODE20 (20% off)";
    else if(arg>15000)
      return "CODE15 (15% off)";
    else if(arg>10000)
      return "CODE10 (10% off)";
    else
      return "CODE5 (5% off)";
  }

}
