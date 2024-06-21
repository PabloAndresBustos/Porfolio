import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SharedModule } from './shared/shared.module';
import { DisplayService } from './services/display.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, SharedModule],
})
export class AppComponent implements OnInit{

  constructor() {}

  displaySrv = inject(DisplayService);
  
  ngOnInit(){
    this.displaySrv.languaje();
    /* Cambio de theme */ 
    this.displaySrv.chageTheme();
  }

}