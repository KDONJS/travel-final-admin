import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ToursComponent } from './components/tours/tours.component';
import { ConfigComponent } from './components/sistem/config/config.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'tours', component: ToursComponent},
    {path: 'configs', component: ConfigComponent}
];
