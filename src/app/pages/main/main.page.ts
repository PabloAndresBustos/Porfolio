import { AfterViewInit, Component, HostListener, OnInit, inject } from '@angular/core';
import { IonFooter, IonToggle, IonButton } from '@ionic/angular/standalone';
import { DisplayService } from 'src/app/services/display.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonButton, SharedModule, IonFooter, IonToggle]
})
export class MainPage implements OnInit, AfterViewInit {

  displaySrv = inject(DisplayService);
  width!:number;
  
  @HostListener('window:resize', ['$event'])
  mobileSize(event:any){
    this.screenSize()
  }

  changeTitle(title:string){
    return this.displaySrv.changeTitle(title);
  }

  changeLanguaje(){
    return this.displaySrv.changeLanguaje();
  }

  isMobile(){
    return this.displaySrv.headerMobile();
  }

  isCheked(){
    return this.displaySrv.toggleChecked();
  }

  pageList(){
    return this.displaySrv.languajeTitle();
  }

  getContacts(){
    return this.displaySrv.contacts;
  }

  goContact(url:string){
    window.open(url, '_blank');
  }

  screenSize(){
    this.width = window.innerWidth;
    if(this.width <= 950){
      this.displaySrv.headerMobile.set(true);
    }else{
      this.displaySrv.headerMobile.set(false);
    }
  }
  
  ngOnInit() { 

  }

  ngAfterViewInit(){
   this.screenSize()
  }

}