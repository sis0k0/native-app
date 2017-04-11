import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from 'nativescript-angular/forms';

import {LoginRouterModule} from './login-router.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,

        LoginRouterModule,
    ],
    exports: [LoginRouterModule]
})

export class LoginModule {}
