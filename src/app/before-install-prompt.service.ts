import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeforeInstallPromptService {
  constructor() {
    window.addEventListener('beforeinstallprompt', this.onBeforeInstallPrompt);
  }

  public prompt() {
    const event = (window as any).beforeInstallPromptEventDeferred;
    if (event) {
      event.prompt();
      event.userChoice.then(() => {
        (window as any).beforeInstallPromptEventDeferred = null;
      });
      return event.userChoice;
    }

    return Promise.reject('No deferred event to prompt');
  }

  public hasBeforeInstallEvent() {
    return !!(window as any).beforeInstallPromptEventDeferred;
  }

  private onBeforeInstallPrompt(event: BeforeInstallPromptEvent) {
    event.preventDefault();
    (window as any).beforeInstallPromptEventDeferred = event;
  }
}
