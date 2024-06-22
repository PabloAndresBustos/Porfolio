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
    return this.displaySrv.interface.proyectos;
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
