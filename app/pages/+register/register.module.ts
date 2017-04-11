import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from 'nativescript-angular/forms';

import {RegisterComponent} from './register.component';
import {RegisterRouterModule} from './register-router.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      ReactiveFormsModule,

      RegisterRouterModule,
  ],
  exports: [RegisterRouterModule]
})

export class RegisterModule {}
