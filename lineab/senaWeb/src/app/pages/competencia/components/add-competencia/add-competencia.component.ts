import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { competenciaModel } from '@models/competencia.model';
import { UINotificationService } from '@services/uinotification.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-competencia',
  templateUrl: './add-competencia.component.html',
  styleUrls: ['./add-competencia.component.scss']
})
export class AddCompetenciaComponent implements OnInit{
  @Input() competencia: competenciaModel;//actualizar

  @Output() store: EventEmitter<competenciaModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formCompetencia: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _uiNotificationService: UINotificationService
  ) {
    this.competencia = {
      id: null,
      nombre: '',
      detalle: '',

    };
    this.buildForm();
  }

  ngOnInit(): void {

    this.setCompetencia()
  }


  get nombreCompetenciaField() {
    return this.formCompetencia.get('nombre');
  }

  get detalleField() {
    return this.formCompetencia.get('detalle');
  }

  setCompetencia() {
    if (this.competencia) {
      this.formCompetencia.patchValue({
        nombre: this.competencia.nombre,
        detalle: this.competencia.detalle
      })
    }
  }

  private buildForm() {
    this.formCompetencia = this.formBuilder.group({
      id: [0],
      nombre: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
    });

    this.formCompetencia.valueChanges
      .pipe(
        debounceTime(350),
      )
      .subscribe(data => {
      });
  }

  guardarCompetencia() {
    this.store.emit(this.getCompetencia());
  }

  closeModal() {
    this.cancel.emit();
  }

  private getControl(nombre: string) {
    return this.formCompetencia.controls[nombre];
  }

  getCompetencia(): competenciaModel {
    return {
      id: this.competencia?.id,
      nombre: this.getControl('nombre').value,
      detalle: this.getControl('detalle').value
    }
  }
}
