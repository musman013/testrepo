
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { CanDeactivateGuard } from 'projects/fast-code-core/src/public_api';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent  } from './error-page/error-page.component';

import { TaskListComponent, TaskDetailsComponent, TaskNewComponent } from './task/index';
import { AppsListComponent, AppsDetailsComponent, AppsNewComponent } from './apps/index';

const routes: Routes = [
	
	{ path: 'dashboard',  component: DashboardComponent   },
	{ path: 'task', component: TaskListComponent, canDeactivate: [CanDeactivateGuard]},
	{ path: 'task/new', component: TaskNewComponent },
	{ path: 'task/:id', component: TaskDetailsComponent, canDeactivate: [CanDeactivateGuard]},
	{ path: 'apps', component: AppsListComponent, canDeactivate: [CanDeactivateGuard]},
	{ path: 'apps/new', component: AppsNewComponent },
	{ path: 'apps/:id', component: AppsDetailsComponent, canDeactivate: [CanDeactivateGuard]},
  { path: '', component: HomeComponent },
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component:ErrorPageComponent},
	
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);