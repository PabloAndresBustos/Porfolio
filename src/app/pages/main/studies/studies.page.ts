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
      const whiteLogo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg";
      const whiteAlura = "https://www.aluracursos.com/assets/img/home/alura-logo.1712144089.svg";
      this.displaySrv.interface.estudios[1].logo = whiteLogo;
      this.displaySrv.interface.estudios[2].logo = whiteAlura;
      return this.displaySrv.interface.estudios;  
    }else{
      const darkLogo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg";
      const darkAlura = "https://app.aluracursos.com/assets/images/logos/logo-aluraespanhol.svg";
      this.displaySrv.interface.estudios[1].logo = darkLogo;
      this.displaySrv.interface.estudios[2].logo = darkAlura;
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
  }

}
