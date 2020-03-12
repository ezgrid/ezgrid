import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ez-draggable]'
})
export class DraggableDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }

}
