import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'lineBreak'
})
export class LineBreakPipe implements PipeTransform {

  constructor(private readonly domSanitizer: DomSanitizer ) {}

  transform(value: string): string {
    return value.replace(new RegExp('\n', 'g'), "<br />");
  }

}
