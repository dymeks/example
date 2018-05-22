import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {path: 'products',component:HomeComponent},
    {path:'products/new',component:NewComponent},
    {path:'products/:id',component:DetailsComponent},
    {path:'products/:id/edit',component:EditComponent},
    {path: '*',component:HomeComponent},
    {path: '**',component:HomeComponent},

    // {path: 'new',component:NewComponent},
    // {path: 'edit/:id',component:EditComponent},
    // {path: 'authors/:authorId/quotes',component:DisplayQuotesComponent},
    // {path: '**',component:HomeComponent},
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}