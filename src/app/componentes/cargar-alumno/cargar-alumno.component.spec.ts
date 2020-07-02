import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarAlumnoComponent } from './cargar-alumno.component';

describe('CargarAlumnoComponent', () => {
  let component: CargarAlumnoComponent;
  let fixture: ComponentFixture<CargarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
