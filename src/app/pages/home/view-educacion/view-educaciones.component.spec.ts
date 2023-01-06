import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEducacionesComponent } from './view-educaciones.component';

describe('ViewEducacionesComponent', () => {
  let component: ViewEducacionesComponent;
  let fixture: ComponentFixture<ViewEducacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEducacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEducacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
