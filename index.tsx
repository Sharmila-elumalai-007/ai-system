
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';

import { AppComponent } from './src/app/app.component';
import { routes } from './src/app/app.routes';
import { authInterceptor } from './src/app/auth/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes, withHashLocation())
  ],
}).catch((err) => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.