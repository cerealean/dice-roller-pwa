import { Component, OnInit, ViewChild } from '@angular/core';
import { BeforeInstallPromptService } from '../before-install-prompt.service';
import { InstallInstructionsModalComponent } from '../install-instructions-modal/install-instructions-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isMenuOpen = false;
  public isLaunchedFromHomeScreen = this.determineIfLaunchedFromHomeScreen();

  @ViewChild('installInstructions') installInstructions: InstallInstructionsModalComponent;

  constructor(private beforeInstallPromptService: BeforeInstallPromptService) { }

  private determineIfLaunchedFromHomeScreen() {
    return window.matchMedia('(display-mode: standalone)').matches
      || ((window.navigator as any).standalone && (window.navigator as any).standalone === true);
  }

  ngOnInit() {
  }

  public installLocal() {
    if (this.beforeInstallPromptService.hasBeforeInstallEvent()) {
      this.beforeInstallPromptService.prompt();
    } else {
      this.installInstructions.open();
    }
  }

}
