import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: "summary" //this name will be used as html markup be careful !
})
export class summaryPipe implements PipeTransform {


  transform(value: string, limit?: number) {

    if (!value)
      return null;

    let actualLimiit = (limit) ? limit : 50;

    return value.substring(0, actualLimiit) + '...';
  }

}
