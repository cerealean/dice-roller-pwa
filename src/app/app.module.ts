import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BeforeInstallPromptService } from './before-install-prompt.service';
import { InstallInstructionsModalComponent } from './install-instructions-modal/install-instructions-modal.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    InstallInstructionsModalComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BeforeInstallPromptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
