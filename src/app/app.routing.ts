import { Routes } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';

export const AppRoutes: Routes = [
    {
        path: 'movie-home',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'movie-home',
        component: MovieHomeComponent
    }
];
