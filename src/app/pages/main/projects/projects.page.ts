import { Component, OnInit, inject } from '@angular/core';
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
      this.displaySrv.interface.proyectos[1].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg"
      this.displaySrv.interface.proyectos[2].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg"
      this.displaySrv.interface.proyectos[3].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg"
      this.displaySrv.interface.proyectos[4].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose-white.svg"
      return this.displaySrv.interface.proyectos;
    }else{
      this.displaySrv.interface.proyectos[1].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg"
      this.displaySrv.interface.proyectos[2].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg"
      this.displaySrv.interface.proyectos[3].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg"
      this.displaySrv.interface.proyectos[4].logo = "https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg"
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
