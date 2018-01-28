import { Routes } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'movie-home',
        pathMatch: 'full',
    },
    {
        path: 'movie-home',
        component: MovieHomeComponent
    }
];
