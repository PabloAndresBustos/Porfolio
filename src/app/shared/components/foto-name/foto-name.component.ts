import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { IonAvatar } from "@ionic/angular/standalone";
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-foto-name',
  templateUrl: './foto-name.component.html',
  styleUrls: ['./foto-name.component.scss'],
  standalone: true,
  imports: [IonAvatar, NgClass]
})
export class FotoNameComponent  implements OnInit, AfterViewInit {

  displaySrv = inject(DisplayService);

  @ViewChild('text') text!: ElementRef;
  skillText: string = '';
  letterArray: string[] = [];

  @Input() radius!:number;

  textAnimation(){
    return this.displaySrv.textAnimation(
                                          this.text, 
                                          this.skillText, 
                                          this.letterArray,
                                          this.radius
                                        );
  }

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.textAnimation();
  }

}
