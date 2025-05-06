import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ListProyectsComponent } from './component/list-proyects/list-proyects.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'contact', component: ContactComponent},
    {path:'projects', component: ListProyectsComponent}
];
