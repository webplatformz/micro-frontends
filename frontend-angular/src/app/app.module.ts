import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const angularApp = createCustomElement(AppComponent, { injector });
    customElements.define('angular-app', angularApp);
  }

  ngDoBootstrap() {}
}
