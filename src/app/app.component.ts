import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public numberToDisplay: number;
  public showNumber = true;

  @ViewChild('die') dieImage: ElementRef;

  constructor() {
    this.getRandomIntInclusive(1, 20);
  }

  public getRandomIntWithAnimation() {
    this.showNumber = false;
    const element = this.dieImage.nativeElement as HTMLImageElement;
    element.classList.add('rotate');
    setTimeout(() => {
      this.getRandomIntInclusive(1, 20);
      element.classList.remove('rotate');
      this.showNumber = true;
    }, 400);
  }

  private getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.numberToDisplay = Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
