import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

enableProdMode();
bootstrap(AppComponent, [{provide: LocationStrategy, useClass: HashLocationStrategy }, APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]);
