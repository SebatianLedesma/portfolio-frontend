import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProyectosComponent } from './view-proyectos.component';

describe('ViewProyectosComponent', () => {
  let component: ViewProyectosComponent;
  let fixture: ComponentFixture<ViewProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
