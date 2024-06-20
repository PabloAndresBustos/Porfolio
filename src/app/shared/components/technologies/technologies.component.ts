import { Component, OnInit } from '@angular/core';
import { IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  imports: [IonIcon, IonLabel ]
})
export class TechnologiesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
