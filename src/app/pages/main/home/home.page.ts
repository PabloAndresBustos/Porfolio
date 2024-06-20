import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonButton, IonModal, IonText } from "@ionic/angular/standalone";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonModal ,SharedModule]
})
export class HomePage implements OnInit{

  displaySrv = inject(DisplayService);

  @ViewChild(IonModal) modal!:IonModal;

  close(){
    this.modal.dismiss();
  }
  
  ngOnInit() {

  }

}
