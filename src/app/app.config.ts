import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule,HTTP_INTERCEPTORS,provideHttpClient,withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HttpClientModule,
    provideHttpClient(withInterceptors([AuthInterceptor]))

    // {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
    
  ]
  
};
