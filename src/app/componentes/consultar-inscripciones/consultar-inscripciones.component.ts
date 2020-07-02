import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clase/Alumno';
import { ConsultarAlumnoService } from 'src/app/servicio/consultar-alumno.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-inscripciones',
  templateUrl: './consultar-inscripciones.component.html',
  styleUrls: ['./consultar-inscripciones.component.css']
})
export class ConsultarInscripcionesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'materia', 'anioCursada', 'editar'];
  dataSource: any[] = [];



  alumno: Alumno;
  alumnoNuevo: any;

  constructor(
    private consultarAlumnoService: ConsultarAlumnoService,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAlumnos();
  }


  getAlumnos(){
    this.consultarAlumnoService.getAlumnos().subscribe((alumnos) => {
      debugger;
      this.dataSource = alumnos;
      this.alumnoNuevo = this.activatedRoute.snapshot.params;
      if(Object.keys(this.alumnoNuevo).length){
        this.agregarFila(this.alumnoNuevo);
      } 
    });
  }

  agregarFila(alumno: Alumno){
    debugger;    
    this.dataSource.push(alumno);
  }

  editar(element){
    debugger;
    this.router.navigate(['/cargar-alumno-component', element])
  }
}