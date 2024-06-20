import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { IonCard, IonTitle, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonLabel, IonItem, IonText, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports: [IonIcon, IonButtons, IonButton, IonText, IonItem, IonLabel, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ,IonTitle, IonCard]
})
export class CardsComponent  implements OnInit {

  constructor() { }

  displaySrv = inject(DisplayService);

  @Input() logo!:string;
  @Input() pictures!:string;
  @Input() startDate!:string;
  @Input() endDate!:string;
  @Input() task!:string;
  @Input() achivements!:string;
  @Input() taskText!:string;
  @Input() achivementsText!:string;
  @Input() buttonName:string = "";
  @Input() certificate:string = "";
  @Input() download!:string;
  @Input() downloadLabel!:string;
  @Input() buttonNameDownload:string = "";
  @Input() dates:boolean = true;

  toCerticate(){
    window.open(this.certificate, '_blank');
  }

  toDownload(){
    window.open(this.download, '_blank');
  }


  ngOnInit() {
    
  }

}
