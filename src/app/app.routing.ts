﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { DashboardComponent } from './dashboard/index';
import { userAdminComponent } from './userAdmin/index';
import { addUserComponent } from './addUser/index';
import {GaugecomponentComponent} from './gaugecomponent/gaugecomponent.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashBoard',component: DashboardComponent},
    { path: 'userAdmin',component: userAdminComponent},
    { path: 'addUser',component: addUserComponent},
    { path: 'gauges/:deviceId', component:GaugecomponentComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);