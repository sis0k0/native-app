// Angular
import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';

// NativeScript
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NSModuleFactoryLoader} from "nativescript-angular/router";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

import {AppComponent} from "./app.component";
import {AppRouterModule} from './app-router.module';

@NgModule({
  imports: [
    AppRouterModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader}
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule {}
