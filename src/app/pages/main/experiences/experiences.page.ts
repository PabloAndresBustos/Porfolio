import { Component, OnInit, inject } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ExperiencesPage implements OnInit {
  
  displaySrv = inject(DisplayService);

  getExperinces(){
    return this.displaySrv.interface.experiencia;
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
