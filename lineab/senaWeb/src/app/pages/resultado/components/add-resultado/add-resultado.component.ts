import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UINotificationService } from '@services/uinotification.service';
import { debounceTime } from 'rxjs/operators';
import { resultadoModel } from '@models/resultado.model';

@Component({
  selector: 'app-add-resultado',
  templateUrl: './add-resultado.component.html',
  styleUrls: ['./add-resultado.component.scss']
})
export class AddResultadoComponent {
  @Input() resultado: resultadoModel;//actualizar

  @Output() store: EventEmitter<resultadoModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formResultado: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _uiNotificationService: UINotificationService
  )
  {
    this.resultado = {
      id: null,
      nombreResultado: '',
      detalleResultado: '',
      fechaInicioResultado: ,

    };
    this.buildForm();
  }

  ngOnInit(): void {

    this.setResultado()
  }
  }
}
