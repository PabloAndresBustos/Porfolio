import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayService } from 'src/app/services/display.service';
import {
  IonToggle,
  IonButtons,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonMenuButton,
  IonModal,
  IonItem, 
  IonMenuToggle,
  IonLabel} from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonItem, 
    IonButton,
    IonHeader,
    IonIcon,
    IonButtons,
    IonToggle,
    IonToolbar,
    IonTitle,
    RouterLink,
    IonMenuButton,
    IonModal,
    FormsModule,
    IonMenuToggle,
    IonLabel
  ]
})
export class HeaderComponent implements OnInit {

  displaySrv = inject(DisplayService);
  width!: number;

  changeTitle(title: string) {
    return this.displaySrv.changeTitle(title);
  }

  changeLanguaje() {
    return this.displaySrv.changeLanguaje();
  }

  headerTitle() {
    return this.displaySrv.headerTitle();
  }

  isMobile() {
    return this.displaySrv.headerMobile();
  }

  isCheked() {
    return this.displaySrv.toggleChecked();
  }

  pageList() {
    return this.displaySrv.languajeTitle();
  }

  ngOnInit() {

 }

}
