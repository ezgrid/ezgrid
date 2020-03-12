import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzgridLibComponent } from './ezgrid-lib.component';

describe('EzgridLibComponent', () => {
  let component: EzgridLibComponent;
  let fixture: ComponentFixture<EzgridLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzgridLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzgridLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
