import { Component, OnInit, inject } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { DisplayService } from 'src/app/services/display.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ProjectsPage implements OnInit {

  displaySrv = inject(DisplayService)

  getProjects(){
    if(this.displaySrv.selectedTheme){
      const whiteLogo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg";
      for (let i = 1; i < (this.displaySrv.interface.proyectos).length; i++) {
        this.displaySrv.interface.proyectos[i].logo = whiteLogo;
      }
      return this.displaySrv.interface.proyectos;
    }else{
      const darkLogo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg";
      for (let i = 1; i < (this.displaySrv.interface.proyectos).length; i++) {
        this.displaySrv.interface.proyectos[i].logo = darkLogo;
      }
      return this.displaySrv.interface.proyectos;
    }
  }

  getButtonName(){
    return this.displaySrv.interface.tarjetas.repositorio;
  }

  getButtonNameDowload(){
    return this.displaySrv.interface.tarjetas.descarga;
  }

  getAchievements(){
    return this.displaySrv.interface.tarjetas.logros;
  }

  getDownloadLabel(){
    return this.displaySrv.interface.tarjetas.descargaTitulo;
  }
  
  ngOnInit() {
  }

}
