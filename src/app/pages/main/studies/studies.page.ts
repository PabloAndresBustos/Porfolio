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
    if(this.displaySrv.selectedTheme){
      this.displaySrv.interface.estudios[1].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg"
      this.displaySrv.interface.estudios[2].logo = "https://www.aluracursos.com/assets/img/home/alura-logo.1712144089.svg"
      return this.displaySrv.interface.estudios;  
    }else{
      this.displaySrv.interface.estudios[1].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg"
      this.displaySrv.interface.estudios[2].logo = "https://app.aluracursos.com/assets/images/logos/logo-aluraespanhol.svg"
      return this.displaySrv.interface.estudios
    }
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
    console.log(this.getStudies())
  }

}
