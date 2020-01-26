import { TransformService } from './../../services/transform.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSep'
})
export class ThousandSepPipe implements PipeTransform {

  constructor(private transformService:TransformService){}
  transform(value: number): string {
    return this.transformService.addThousandSeperator(value.toString());
  }

}
