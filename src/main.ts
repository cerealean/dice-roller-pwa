import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  // const browserHasServiceWorkerEnabled = 'serviceWorker' in navigator;
  // if (browserHasServiceWorkerEnabled && environment.production) {
  //   navigator.serviceWorker.register('/ngsw-worker.js');
  //   console.log('Called service worker register');
  // }
}).catch(err => console.log(err));