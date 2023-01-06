import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExperienciasComponent } from './view-experiencias.component';

describe('ViewExperienciasComponent', () => {
  let component: ViewExperienciasComponent;
  let fixture: ComponentFixture<ViewExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExperienciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
