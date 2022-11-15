import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error500Component } from '@shared/components/error500/error500.component';
import { Error404Component } from '@shared/components/error404/error404.component';
import { IndexComponent } from './product/index/index.component';
import { FormComponent } from './product/form/form.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'nuevo', component: FormComponent },
	{ path: 'editar/:id', component: FormComponent },
	{ 
		path: '', 
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
	},
	//-- Error 500 page
	{ path: 'error-500', component: Error500Component },
	//-- Not found page
	{ path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
