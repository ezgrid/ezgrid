import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ez-dropable]'
})
export class DropableDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
