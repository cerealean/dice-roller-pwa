import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'install-instructions-modal',
  templateUrl: './install-instructions-modal.component.html',
  styleUrls: ['./install-instructions-modal.component.scss']
})
export class InstallInstructionsModalComponent implements OnInit {
  public isOpen = false;
  public isiOS = /iPad|iPhone|iPod/g.test(navigator.userAgent) && !(window as any).MSStream;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

}
