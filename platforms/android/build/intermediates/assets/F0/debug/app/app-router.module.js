"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var routes = [
    // {
    //   path: '',
    //   loadChildren: 'app/pages/+products/products.module#ProductsModule'
    // },
    {
        path: '',
        loadChildren: './pages/+login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './pages/+register/register.module#RegisterModule'
    }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(routes)
        ],
        exports: [
            router_1.NativeScriptRouterModule
        ],
        declarations: [
            app_component_1.AppComponent
        ]
    })
], AppRouterModule);
exports.AppRouterModule = AppRouterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVDO0FBQ3ZDLHNEQUFxRTtBQUdyRSxpREFBNkM7QUFFN0MsSUFBTSxNQUFNLEdBQVc7SUFDckIsSUFBSTtJQUNKLGNBQWM7SUFDZCx1RUFBdUU7SUFDdkUsS0FBSztJQUNMO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUseUNBQXlDO0tBQ3hEO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixZQUFZLEVBQUUsa0RBQWtEO0tBQ2pFO0NBQ0YsQ0FBQztBQWVGLElBQWEsZUFBZTtJQUE1QjtJQUE4QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQS9CLElBQStCO0FBQWxCLGVBQWU7SUFiM0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDekM7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQ0FBd0I7U0FDekI7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtTQUNiO0tBQ0YsQ0FBQztHQUVXLGVBQWUsQ0FBRztBQUFsQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyB7XG4gIC8vICAgcGF0aDogJycsXG4gIC8vICAgbG9hZENoaWxkcmVuOiAnYXBwL3BhZ2VzLytwcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGUjUHJvZHVjdHNNb2R1bGUnXG4gIC8vIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzLytsb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGUnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncmVnaXN0ZXInLFxuICAgIGxvYWRDaGlsZHJlbjogJy4vcGFnZXMvK3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZHVsZSNSZWdpc3Rlck1vZHVsZSdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0ZXJNb2R1bGUge31cbiJdfQ==