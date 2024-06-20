import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FotoNameComponent } from './components/foto-name/foto-name.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { 
        IonContent, 
        IonHeader, 
        IonTitle,
        IonToolbar, 
        IonMenuToggle, 
        IonLabel, 
        IonItem,
        IonMenu, 
        IonIcon, 
        IonRouterOutlet, 
        IonButtons,
        IonAvatar,
        IonImg
      } from '@ionic/angular/standalone';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgClass,
    HeaderComponent,
    FotoNameComponent,
    CardsComponent,
    TechnologiesComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    IonContent, 
    IonHeader, 
    IonAvatar,
    IonTitle, 
    IonToolbar, 
    IonMenuToggle, 
    IonLabel, 
    IonItem,
    IonMenu, 
    IonIcon,
    IonButtons, 
    IonRouterOutlet,
    IonImg
  ],
  exports:[
    NgClass,
    HeaderComponent,
    FotoNameComponent,
    CardsComponent,
    TechnologiesComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    IonContent, 
    IonHeader, 
    IonAvatar,
    IonTitle, 
    IonToolbar, 
    IonMenuToggle, 
    IonLabel, 
    IonItem,
    IonMenu, 
    IonIcon, 
    IonButtons,
    IonRouterOutlet,
    IonImg
  ]
})
export class SharedModule { }
