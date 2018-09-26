import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, args?: any): any {
    if (text.length == 0) {
      return text;
    } else {
      return args
        ? text.replace(
            new RegExp(args, 'i'),
            `<b>${args}</b>`
          )
        : text;
    }
  }
}