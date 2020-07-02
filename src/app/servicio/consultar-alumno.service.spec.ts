import { TestBed } from '@angular/core/testing';

import { ConsultarAlumnoService } from './consultar-alumno.service';

describe('ConsultarAlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarAlumnoService = TestBed.get(ConsultarAlumnoService);
    expect(service).toBeTruthy();
  });
});
