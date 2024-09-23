import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { routes } from './app.routes';
import { AppService } from './app.service';

const config: SocketIoConfig = { url: 'ws://localhost:8080/websocket-endpoint', options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(SocketIoModule.forRoot(config)),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    AppService
  ]
};
