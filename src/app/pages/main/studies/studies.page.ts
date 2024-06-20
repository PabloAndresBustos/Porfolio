import { Component, OnInit, inject } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.page.html',
  styleUrls: ['./studies.page.scss'],
  standalone: true,
    imports: [SharedModule]
})
export class StudiesPage implements OnInit {

  displaySrv = inject(DisplayService);

  constructor() { }

  getStudies(){
    return this.displaySrv.interface.estudios;
  }

  getButtonName(){
    return this.displaySrv.interface.tarjetas.certificado;
  }

  getTaskTitle(){
    return this.displaySrv.interface.tarjetas.tareas;
  }

  getAchievementsTitle(){
    return this.displaySrv.interface.tarjetas.logros;
  }

  ngOnInit() {

  }

}
