"use strict";
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// NativeScript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_2 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var app_router_module_1 = require("./app-router.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_router_module_1.AppRouterModule,
            nativescript_module_1.NativeScriptModule,
            forms_2.NativeScriptFormsModule,
            forms_1.ReactiveFormsModule
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader }
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBZ0Y7QUFDaEYsd0NBQW1EO0FBRW5ELGVBQWU7QUFDZixnRkFBNEU7QUFDNUUsc0RBQWtFO0FBQ2xFLG9EQUFtRTtBQUVuRSxpREFBNkM7QUFDN0MseURBQW9EO0FBZ0JwRCxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFkckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsbUNBQWU7WUFDZix3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDJCQUFtQjtTQUNwQjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFFO1lBQ1QsRUFBQyxPQUFPLEVBQUUsNEJBQXFCLEVBQUUsUUFBUSxFQUFFLDhCQUFxQixFQUFDO1NBQ2xFO1FBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUVXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhclxuaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIE5hdGl2ZVNjcmlwdFxuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05TTW9kdWxlRmFjdG9yeUxvYWRlcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FwcFJvdXRlck1vZHVsZX0gZnJvbSAnLi9hcHAtcm91dGVyLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBcHBSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlcn1cbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=