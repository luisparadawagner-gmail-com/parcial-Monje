import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clase/Alumno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

interface Materia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cargar-alumno',
  templateUrl: './cargar-alumno.component.html',
  styleUrls: ['./cargar-alumno.component.css']
})
export class CargarAlumnoComponent implements OnInit {

alumno: Alumno;
alumnoForm: FormGroup;
editarRegistro: any;


materias: Materia[] = [
  {value: 'MongoDB', viewValue: 'MongoDB'},
  {value: 'Javascript', viewValue: 'Javascript'},
  {value: 'Matematica', viewValue: 'Matematica'},
  {value: 'Redes', viewValue: 'Redes'},
  {value: 'NodeJS', viewValue: 'NodeJS'},
  {value: 'ExpressJS', viewValue: 'ExpressJS'},
];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    debugger;
    this.editarRegistro = this.activatedRoute.snapshot.params;

    if(Object.keys(this.editarRegistro).length){
      this.alumno = this.editarRegistro;
		} 

    this.initForm(this.alumno);
  }

initForm(editarAlumno: Alumno){
  this.alumnoForm = this.fb.group({
    nombre: [editarAlumno ? editarAlumno.nombre: '', Validators.required],
    apellido: [editarAlumno ? editarAlumno.apellido: '', Validators.required],
    edad: [editarAlumno ? editarAlumno.edad: '', Validators.required],
    materia: [editarAlumno ? editarAlumno.materia: '', Validators.required],
    anioCursada: [editarAlumno ? editarAlumno.anioCursada: '', Validators.required]

  })

}


  submit(){
    debugger;
    this.alumnoForm.value;
     this.alumno = this.alumnoForm.value;

     this.router.navigate(['/consultar-inscripciones-component', this.alumno]);

  }
}
