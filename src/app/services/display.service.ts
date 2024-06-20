import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  http = inject(HttpClient);
  location = inject(Location);

  public interface!:any;
  public selectedTheme = false;
  public readonly headerMobile = signal<boolean>(false);
  public readonly toggleChecked = signal<boolean>(false);
  public readonly headerTitle = signal<string>('');
  public readonly languajeTitle = signal<any[]>([]); 
  public readonly contacts = [
    {title: 'LinkedIn', url: 'https://www.linkedin.com/in/pipablo/', icon: 'logo-github'},
    {title: 'GitHub', url: 'https://github.com/PabloAndresBustos', icon: 'logo-linkedin'}
  ]

  /* Seleccion de idioma */
  languaje(){
    this.http.get<any>('assets/interface/interface.JSON')
    .subscribe(data => {

      if(this.toggleChecked()){
        this.interface = data.idiomas.ingles
        this.toggleChecked.set(true);
      }else{
        this.interface = data.idiomas.espaniol
        this.toggleChecked.set(false);
      }

      this.languajeTitle.update(
        value => value = [
          this.interface.sideBar.inicio,
          this.interface.sideBar.experiencia,
          this.interface.sideBar.estudios,
          this.interface.sideBar.proyectos
        ]
      );

      for (let i = 0; i < this.languajeTitle().length; i++) {
        const currentTitle = this.languajeTitle()[i].titulo;
        this.changeTitle(currentTitle);
      }

    })
  }
  /* Fin seleccion de idioma */

  /* Cambio de idioma de los titulos */
  changeTitle(title:string){
    this.headerTitle.update(value => value = title); 
  }
  /* Fin cambio de titulos */


  /* Seleccion de Theme */
  initialTheme(isDark: boolean) {
    this.selectedTheme = isDark;
    this.themeStatus(isDark);
  }

  themeStatus(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  toggleChange(event: any) {
    this.themeStatus(event.detail.checked);
  }

  chageTheme(){
    const preferTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.initialTheme(preferTheme.matches);
    preferTheme.addEventListener('change', (mediaQuery) => {
      this.initialTheme(mediaQuery.matches);
    })
  }


  /* Animacion del texto en la foto */
  textAnimation(
                text: ElementRef, 
                textObjetive:string, 
                letterArray: string[],
                radiusNumber:number
              ){

    textObjetive = text.nativeElement.innerHTML;

    letterArray = textObjetive.split('');

    text.nativeElement.textContent = '';

    const radius = radiusNumber;

    for (let i = 0; i < letterArray.length; i++) {
      const span = document.createElement('span');
      span.textContent = letterArray[i];
      span.classList.add('letter');

      /* Calcular posición de los span alrededor del círculo */
      const angle = (Math.PI / (letterArray.length - 1)) * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      text.nativeElement.appendChild(span);

      /* Aplicar estilos de posición y transformación */
      span.style.transform = `rotate(${i + 10}deg)`;
      span.style.position = 'absolute';
      span.style.width = '15px';
      span.style.height = '30px';
      span.style.transformOrigin = 'center center';
      span.style.textAlign = 'center';
      span.style.left = `calc(25% + ${x}px)`;
      span.style.top = `calc(25% + ${y}px)`;
      span.style.transform = `translate(-50%, -50%) rotate(${angle * (180 / Math.PI) + 90}deg)`;
    }

  }

  /* Fin animacion de texto en la foto */

  /* Cambio de los textos segun idioma */
  changeLanguaje(){
    this.toggleChecked.update(value => value = !value);
    this.languaje();
  }
  /* Fin cambio de textos segun idioma */
}