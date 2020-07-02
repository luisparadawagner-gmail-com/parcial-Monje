import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInscripcionesComponent } from './consultar-inscripciones.component';

describe('ConsultarInscripcionesComponent', () => {
  let component: ConsultarInscripcionesComponent;
  let fixture: ComponentFixture<ConsultarInscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarInscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
