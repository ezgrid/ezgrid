import { NgModule } from '@angular/core';
import { EzgridLibComponent } from './ezgrid-lib.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DropableDirective } from './directives/dropable.directive';



@NgModule({
  declarations: [EzgridLibComponent, DraggableDirective, DropableDirective],
  imports: [
  ],
  exports: [EzgridLibComponent]
})
export class EzgridLibModule { }
