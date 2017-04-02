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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVDO0FBQ3ZDLHNEQUFxRTtBQUVyRSxpREFBNkM7QUFFN0MsSUFBTSxNQUFNLEdBQUc7SUFDYixJQUFJO0lBQ0osY0FBYztJQUNkLHVFQUF1RTtJQUN2RSxLQUFLO0lBQ0w7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFlBQVksRUFBRSx5Q0FBeUM7S0FDeEQ7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSxrREFBa0Q7S0FDakU7Q0FDRixDQUFDO0FBZUYsSUFBYSxlQUFlO0lBQTVCO0lBQThCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBL0IsSUFBK0I7QUFBbEIsZUFBZTtJQWIzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sRUFBRTtZQUNQLGlDQUF3QjtTQUN6QjtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1NBQ2I7S0FDRixDQUFDO0dBRVcsZUFBZSxDQUFHO0FBQWxCLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzID0gW1xuICAvLyB7XG4gIC8vICAgcGF0aDogJycsXG4gIC8vICAgbG9hZENoaWxkcmVuOiAnYXBwL3BhZ2VzLytwcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGUjUHJvZHVjdHNNb2R1bGUnXG4gIC8vIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzLytsb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGUnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncmVnaXN0ZXInLFxuICAgIGxvYWRDaGlsZHJlbjogJy4vcGFnZXMvK3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZHVsZSNSZWdpc3Rlck1vZHVsZSdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0ZXJNb2R1bGUge31cbiJdfQ==